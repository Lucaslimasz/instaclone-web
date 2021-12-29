import { useState, useEffect, useRef } from "react";

import * as S from "./styles";
import api from "../config/api";

import Header from "../components/Header";
import Storys from "../components/Storys";
import Post from "../components/Post";

import Config from "../assets/perfil.png";

function Home() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasEndingPosts, setHasEndingPosts] = useState(false);
  const loaderRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "20px",
      threshold: 1.0,
    };

    const observer = new IntersectionObserver((entities) => {
      const target = entities[0];

      if (target.isIntersecting) {
        setCurrentPage((prevState) => prevState + 1);
      }
    }, options);

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }
  }, []);

  useEffect(() => {
    (async () => {
      const { data } = await api.get("posts", {
        params: {
          _page: currentPage,
          _limit: 3,
        },
      });

      if (!data.length) {
        setHasEndingPosts(true);
      }

      setPosts([...posts, ...data]);
    })();
  }, [currentPage]);

  return (
    <S.Container>
      <Header />

      <S.Body>
        <Storys />
        {posts.map((item) => (
          <Post
            key={item.id}
            perfil={item.perfil}
            user_name={item.user_name}
            post={item.post}
          />
        ))}
        <img src={Config} alt="" />
      </S.Body>
      {!hasEndingPosts && <p ref={loaderRef}>CARREGANDO....</p>}
    </S.Container>
  );
}

export default Home;

import * as S from "./styles";
import LazyLoad from "react-lazyload";

function Post({ perfil, user_name, post }) {
  return (
    <S.Container>
      <S.Header>
        <div>
          <img className="perfil-photo" src={perfil} alt="heart" />
          <b>{user_name}</b>
        </div>
        <b>...</b>
      </S.Header>
      <LazyLoad height={200} once>
        <S.Image src={post} />
      </LazyLoad>
      <S.Bottom></S.Bottom>
    </S.Container>
  );
}

export default Post;

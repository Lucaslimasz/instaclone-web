import * as S from "./styles";

import HomeSVG from "../../assets/home.svg";
import MessengerSVG from "../../assets/messenger.svg";
import AddSVG from "../../assets/add.svg";
import HeartSVG from "../../assets/heart.svg";
import SearchSVG from "../../assets/search.svg";

function Header() {
  return (
    <S.Container>
      <S.Wrapper>
        <img
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt=""
        />

        <S.ContainerInput>
          <img src={SearchSVG} alt="search" />
          <input placeholder="Search"/>
        </S.ContainerInput>

        <S.Buttons>
          <img src={HomeSVG} alt="home" />
          <img src={MessengerSVG} alt="messenger" />
          <img src={AddSVG} alt="add" />
          <img src={HeartSVG} alt="heart" />
          <img className="perfil-photo" src="https://github.com/lucaslimasz.png" alt="heart" />
        </S.Buttons>
      </S.Wrapper>
    </S.Container>
  );
}

export default Header;

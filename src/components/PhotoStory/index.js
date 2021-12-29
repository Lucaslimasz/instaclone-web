import * as S from "./styles";

function PhotoStory() {
  const Name = "lucaslimasz_";
  return (
    <S.Container>
      <img
        className="perfil-photo"
        src="https://github.com/lucaslimasz.png"
        alt="heart"
      />
      <span>
        {Name.substring(0, 10)}
        {Name.length >= 10 && "..."}
      </span>
    </S.Container>
  );
}

export default PhotoStory;

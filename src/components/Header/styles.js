import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 15px 0;

  background: #000;
  border-bottom: 1px solid #393f41;
`;

export const Wrapper = styled.div`
  max-width: 980px;
  margin: auto;
  padding: 0 15px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContainerInput = styled.div`
  background: #0e0f0f;
  border-radius: 2px;
  border: 1px solid #393f41;

  margin-left: 150px;

  display: flex;
  align-items: center;
  padding: 0 10px;

  img {
    width: 10px;
  }

  input {
    background: transparent;
    height: 30px;
    width: 200px;
    margin-left: 8px;
    font-size: 15px;
    color: #fff;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;

  .perfil-photo {
    border-radius: 100px;
  }

  img {
    color: red;
    width: 25px;
    cursor: pointer;

    & + img {
      margin-left: 20px;
      stroke: red;
    }
  }
`;

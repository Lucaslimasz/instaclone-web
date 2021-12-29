import styled from "styled-components";

export const Container = styled.div`
  background: #000;
  border: 1px solid #393f41;
  margin-top: 25px;
  grid-column: 1/2;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 10px 12px;

  div {
    display: flex;
    align-items: center;

    img {
      width: 35px;
      border-radius: 70px;
      margin-right: 15px;
    }
    b {
      font-size: 14px;
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  margin: 12px 0;
`;

export const Bottom = styled.div`
  padding: 10px 12px;
`;

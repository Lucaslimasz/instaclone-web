import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #393f41;
  padding: 15px 20px;
  background: #000;
  grid-column: 1/2;

  overflow-x: scroll;

  display: flex;
  position: relative;

  button {
    background: #fff;
    border-radius: 50%;
    position: absolute;

    width: 20px;
    height: 20px;
    right: 5px;

    top: 50%;
    bottom: 50%;
    transform: translate(-50%, -50%);
  }
`;

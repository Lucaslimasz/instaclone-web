import styled from "styled-components";

export const Container = styled.div``;

export const Body = styled.div`
  padding: 30px;
  max-width: 1010px;
  margin: auto;

  display: grid;
  column-gap: 29px;
  grid-template-columns: 616px 300px;

  > img {
    grid-column: 2/3;
    grid-row: 1/3;
  }

  @media (max-width: 768px) {
    grid-template-columns: 100%;
    > img {
      display: none;
    }
  }
`;

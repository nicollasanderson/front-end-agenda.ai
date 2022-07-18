import styled from "styled-components";

export const SectionMain = styled.section`
  width: 100%;
  height: 89vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivText = styled.div`
  width: 80%;
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  h1 {
    font-size: 100px;
  }

  @media (max-width: 700px) {
    figure {
      display: flex;
      justify-content: center;
      img {
        width: 80%;
      }
    }
  }
`;

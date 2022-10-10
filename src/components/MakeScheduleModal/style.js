import styled from "styled-components";

export const DivMain = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgb(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 3;
`;

export const DivContainer = styled.div`
  width: 500px;
  height: 500px;
  background-color: white;
  border-radius: 10px;
  overflow: auto;

  h1 {
    margin: 20px 0;
  }

  > div {
    display: flex;
    align-items: center;
    flex-flow: column;

    > div {
      width: 80%;
      display: flex;
      flex-flow: column;

      textarea {
        resize: vertical;
        max-height: 200px;
        min-height: 50px;
      }
    }
  }
`;

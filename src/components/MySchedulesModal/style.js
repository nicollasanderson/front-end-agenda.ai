import styled from "styled-components";

export const DivBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgb(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 3;

  > div {
    width: 500px;
    height: 700px;
    background-color: white;
    border-radius: 3px;
    padding: 20px;
    overflow: scroll;
    overflow-x: hidden;

    > div {
      text-align: center;

      > div {
        display: flex;
        flex-flow: column;
        align-items: center;
      }
    }
  }
`;

import styled from "styled-components";

export const AllMonthMainDiv = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.3);
  position: absolute;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background-color: white;
  width: 700px;
  height: 600px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-flow: column;
  padding: 10px;

  > div {
    width: 100%;
    height: 90%;

    .month__display {
      text-transform: capitalize;
      font-size: 30px;
    }

    h1,
    h2 {
      text-align: center;
      padding: 10px 0;
    }
  }
`;

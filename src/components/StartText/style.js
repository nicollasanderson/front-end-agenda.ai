import styled from "styled-components";

export const DivMain = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: column;
  align-items: center;
  height: 90%;

  div {
    width: 600px;
    text-align: center;
  }

  button {
    border: none;
    border-radius: 10px;
    height: 100px;
    margin-top: 30px;
    width: 360px;
    background-color: #0000ff;

    p {
      color: white;
      font-size: 40px;
    }
  }

  h2 {
    font-size: 50px;
    color: #0033b5;
  }

  @media (max-width: 700px) {
    div {
      width: 100%;
    }
    h2 {
      font-size: 30px;
    }
  }

  @media (max-width: 400px) {
    div {
      margin-top: 200px;
    }
    button {
      width: 90%;
      p {
        font-size: 30px;
      }
    }
  }
`;

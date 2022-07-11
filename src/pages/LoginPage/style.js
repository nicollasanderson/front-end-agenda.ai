import styled from "styled-components";

export const StyledLabel = styled.label`
  color: ${({ errColor }) => errColor};
`;

export const DivContainer = styled.div`
  height: 89vh;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    border: 1px solid #ccc;
    border-radius: 10px;
    width: 400px;
    padding: 50px 0;
    box-shadow: 0px 10px 34px 20px rgba(0, 0, 0, 0.1);

    h1 {
      text-align: center;
      margin-bottom: 30px;
    }

    > p {
      width: 70%;
      text-align: center;
      margin: 0 auto;
      margin-top: 20px;
    }

    form {
      width: 90%;
      height: 100%;
      display: flex;
      justify-content: center;
      flex-flow: column;
      margin: 0 auto;

      input {
        height: 50px;
        margin-bottom: 20px;
        margin-top: 5px;
        border-radius: 7px;
        border: 1px solid #ccc;
        padding-left: 15px;
      }

      button {
        background-color: #0000ff;
        color: white;
        border: none;
        border-radius: 10px;
        height: 50px;
        width: 200px;
        margin: 0 auto;

        p {
          font-size: 25px;
        }
      }
    }
  }
`;

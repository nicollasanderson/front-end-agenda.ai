import styled from "styled-components";

export const MainContent = styled.div`
  width: 70%;
  height: 100%;
  padding: 15px;
  display: flex;
  flex-flow: column;

  button {
    background-color: #0000ff;
    color: white;
    border: none;
    border-radius: 10px;
    height: 50px;
    width: 200px;
    margin: 20px auto;

    p {
      font-size: 25px;
    }
  }

  h2 {
    text-align: center;
    margin-bottom: 5px;
  }

  > div {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    form {
      display: flex;
      flex-flow: column;
      width: 100%;
      font-size: 25px;

      input {
        margin: 10px 0 10px 10px;
        height: 40px;
        border: none;
      }
    }
  }
`;

import styled from "styled-components";

export const MainContent = styled.div`
  width: 60%;
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
    margin-bottom: 20px;
  }

  > div {
    display: flex;
    justify-content: center;
    form {
      display: flex;
      flex-flow: column;
      width: 100%;
      font-size: 25px;

      > div {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;

        select {
          width: 200px;
          margin: 0 20px;
          height: 50px;
          border-radius: 5px;
          background-color: white;
          font-size: 20px;
          padding-left: 10px;
          display: flex;
          border: 2px solid;
        }
        label {
          display: flex;
          flex-flow: column;
          align-items: center;
        }
      }

      input {
        margin: 10px 0 10px 10px;
        height: 40px;
        border: 2px solid;
      }
    }
  }
`;

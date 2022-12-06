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

  .button__make__schedule {
    width: 50%;
    padding: 0 10px;
    border: 2px solid green;
    border-radius: 5px;
    height: 100px;
    background-color: white;
    color: green;
    transition: 0.5s;
    margin: 0 10px;

    &:hover {
      background-color: green;
      color: white;
    }
  }
`;

export const DivContainer = styled.div`
  width: 800px;
  height: 700px;
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
  }
`;

export const MainContent = styled.div`
  width: 80%;
  display: flex;
  flex-flow: column;

  textarea {
    resize: vertical;
    max-height: 200px;
    min-height: 50px;
  }

  h2 {
    text-align: center;
  }

  h3 {
    text-align: center;
    padding: 50px 0;
    color: red;
  }
  > div {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const DivForm = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90%;
  margin-top: 20px;
  form {
    display: flex;
    flex-flow: column;
    width: 100%;
    align-items: center;
  }
`;

export const FormContainer = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
`;

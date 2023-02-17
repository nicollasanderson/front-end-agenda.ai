import styled from "styled-components";

export const DivFormContainer = styled.div`
  select {
    width: 200px;
    margin: 0 20px;
    height: 50px;
    border-radius: 5px;
    background-color: white;
    font-size: 20px;
    padding-left: 10px;
    display: flex;
  }
  label {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 10px 0;
  }
`;

export const DivButton = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const DivDescription = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  label {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin: 10px 0;

    textarea {
      margin-left: 10px;
    }
  }
`;

export const FormMain = styled.form`
  display: flex;
  flex-flow: column;
  margin-top: 10px;
  align-items: center;
  justify-content: center;
  height: 100%;
  > div {
    display: flex;
  }
  button {
    border: none;
    border-radius: 10px;
    height: 50px;
    margin-top: 30px;
    width: 180px;
    background-color: #0000ff;

    p {
      color: white;
      font-size: 20px;
    }
  }

  textarea {
    resize: none;
    padding: 7px;
  }

  .error-red {
    color: red;
    select {
      border-color: red;
    }
    textarea {
      border-color: red;
    }
  }
`;

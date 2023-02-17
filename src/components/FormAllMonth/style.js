import styled from "styled-components";

export const DivMainMonth = styled.div`
  width: 100%;
  height: 70%;

  .error-red {
    color: red;
    select {
      border-color: red;
    }
    textarea {
      border-color: red;
    }
  }

  form {
    display: flex;
    flex-flow: column;
    height: 100%;

    textarea {
      resize: none;
    }

    button {
      border: none;
      border-radius: 10px;
      height: 50px;
      width: 180px;
      background-color: #0000ff;

      p {
        color: white;
        font-size: 20px;
      }
    }

    > div {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 50px;

      label {
        input {
          margin-right: 5px;
        }
      }
    }

    .form_month__div {
      height: 100%;
      align-items: center;

      .form_infos__div {
        display: flex;
        flex-flow: column;
        align-items: flex-end;
      }

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
      }
    }
  }
`;

export const DivDescriptionMonth = styled.div``;

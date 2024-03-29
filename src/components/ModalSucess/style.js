import styled from "styled-components";

export const DivMain = styled.div`
  position: fixed;
  background-color: rgb(0, 0, 0, 0.3);
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    height: 360px;
    width: 450px;
    border-radius: 10px;
    border: 2px solid;
    background-color: white;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: center;
    p {
      text-align: center;
      margin: 20px;
    }
    button {
      color: white;
      margin: 0 10px;
      font-weight: bold;
    }
    /* > button {
      position: fixed;
      top: 270px;
      right: 450px;
      width: 30px;
      height: 30px;
      background-color: white;
      border: 2px solid;
      border-radius: 50%;
    } */
  }
  svg {
    width: 100px;
    height: 100px;
    color: green;
    margin-bottom: 20px;
  }
`;

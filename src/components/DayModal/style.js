import styled from "styled-components";

export const StyledDiv = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgb(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;

  .blue__coming__schedule {
    background-color: #00cdff;
  }
`;

export const DivContainer = styled.div`
  width: 700px;
  height: 700px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    text-align: center;
  }

  > div {
    width: 95%;
    height: 90%;
    overflow: auto;

    > div {
      display: flex;
      flex-flow: wrap;
      justify-content: center;
    }
  }
`;

export const NoneScheduleP = styled.p`
  margin: 40% auto;
`;

export const DivButtons = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  .button__make__schedule {
    width: 50px;
    border: 2px solid green;
    border-radius: 5px;
    height: 40px;
    background-color: white;
    color: green;
    transition: 0.5s;

    &:hover {
      background-color: green;
      color: white;
    }
  }
`;

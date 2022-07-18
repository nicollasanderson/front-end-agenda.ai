import styled from "styled-components";

export const StyledDiv = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;
  background-color: rgb(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivContainer = styled.div`
  width: 500px;
  height: 500px;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 300px;

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

import styled from "styled-components";

export const SectionMain = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const ContainerPanel = styled.div`
  width: 80%;
  max-width: 900px;
  height: 90%;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 10px 34px 20px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-flow: column;

  > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column;
    align-items: center;
    padding: 20px 0;
    justify-content: space-between;

    .buttons__holder {
      height: 100px;
      width: 90%;
      display: flex;
      align-items: center;
      justify-content: center;

      button {
        width: 150px;
        height: 50px;
        background-color: white;
        border: 3px solid #0000ff;
        border-radius: 5px;
        color: #0000ff;
        font-weight: bold;
        transition: 0.5s;
        margin: 0 5px;

        &:hover {
          background-color: #0000ff;
          color: white;
        }
      }
    }

    .main__content {
      width: 100%;
      height: 83%;
      display: flex;
      justify-content: center;
    }
  }
`;

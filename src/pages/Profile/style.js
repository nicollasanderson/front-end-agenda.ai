import styled from "styled-components";

export const SectionMain = styled.section`
  width: 100%;
  height: 89vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerProfile = styled.div`
  width: 80%;
  max-width: 900px;
  height: 600px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 10px 34px 20px rgba(0, 0, 0, 0.1);
  padding: 15px;
  display: flex;
  flex-flow: column;
`;

export const ContainerButtons = styled.div`
  display: flex;
  flex-flow: row-reverse;

  button {
    width: 20%;
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
`;

export const DivContent = styled.div`
  height: 85%;
  margin-top: 20px;
  display: flex;

  div {
    width: 50%;
    display: flex;
    flex-flow: column;
    align-items: center;
    svg {
      width: 150px;
      height: 150px;
      color: #ccc;
    }
  }
`;

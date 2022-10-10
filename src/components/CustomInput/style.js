import styled from "styled-components";

export const StyledMain = styled.div`
  width: 100%;
  margin: 5px 0;

  input {
    height: 50px;
    margin-bottom: 20px;
    margin-top: 5px;
    border-radius: 7px;
    border: 1px solid ${({ errColor }) => errColor};
    padding-left: 15px;
    width: 100%;
  }
`;

export const StyledLabel = styled.label`
  color: ${({ errColor }) => errColor};
`;

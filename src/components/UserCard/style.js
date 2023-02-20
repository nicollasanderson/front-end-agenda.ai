import { motion } from "framer-motion";
import styled from "styled-components";

export const CardDivMain = styled.div`
  width: 46%;
  height: 130px;
  border: 3px solid #0000ff;
  padding: 3px 3px 0 5px;
  color: #0000ff;
  margin: 10px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: auto;
  p {
    text-align: center;
  }

  div {
    div {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export const DivDeleteButton = styled(motion.div)`
  width: 50px;
  height: 100%;

  svg {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;

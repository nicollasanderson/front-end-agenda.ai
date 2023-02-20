import styled from "styled-components";
import { motion } from "framer-motion";

export const DivCardRoom = styled(motion.div)`
  width: 46%;
  height: 100px;
  border: 3px solid #0000ff;
  padding: 3px 3px 0 3px;
  color: #0000ff;
  margin: 10px;
  border-radius: 10px;
`;

export const DivHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DivDeleteButton = styled(motion.div)`
  width: 50px;
  height: 100%;
  display: flex;
  flex-flow: column;
  justify-content: center;

  svg {
    width: 100%;
    height: 100%;
    cursor: pointer;
  }
`;

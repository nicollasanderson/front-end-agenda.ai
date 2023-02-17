import styled from "styled-components";
import { motion } from "framer-motion";

export const DivContainer = styled(motion.div)`
  width: 70%;
  background: radial-gradient(#1fe4f5, #3fbafe);
  margin: 15px;
  border-radius: 10px;
  padding: 10px 20px 20px 20px;
  display: flex;
  transition: all 0.2s;

  &:hover {
    box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.4);
  }

  h4 {
    text-align: center;
    margin: 5px 0;
  }

  .containerInfos {
    width: 90%;
  }

  > div {
    display: flex;
    flex-flow: column;
  }
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
    color: white;
  }
`;

import styled from "styled-components";
import { motion } from "framer-motion";

export const DivContainer = styled(motion.div)`
  width: 150px;
  background-color: #ccc;
  margin: 15px;
  cursor: pointer;
  border-radius: 10px;
  border: 1px solid black;
  padding: 5px;

  h4 {
    text-align: center;
    margin: 5px 0;
  }
`;

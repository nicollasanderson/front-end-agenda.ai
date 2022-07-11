import { DivMain } from "./style";
import { motion } from "framer-motion";

const StartText = () => {
  return (
    <DivMain>
      <div>
        <h2>Uma solução rápida para agendamentos!</h2>
        <motion.button
          initial={{ scale: 1 }}
          whileHover={{ scale: 0.9 }}
          transition={{ duration: 0.1 }}
        >
          <p>Comece Agora!</p>
        </motion.button>
      </div>
    </DivMain>
  );
};

export default StartText;

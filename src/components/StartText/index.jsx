import { DivMain } from "./style";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const StartText = () => {
  return (
    <DivMain>
      <div>
        <h2>Uma solução rápida para agendamentos!</h2>
        <Link to="/login">
          <motion.button
            initial={{ scale: 1 }}
            whileHover={{ scale: 0.9 }}
            transition={{ duration: 0.1 }}
          >
            <p>Comece Agora!</p>
          </motion.button>
        </Link>
      </div>
    </DivMain>
  );
};

export default StartText;

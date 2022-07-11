import FooterWaves from "../../components/FooterWaves";
import Header from "../../components/Header";
import StartText from "../../components/StartText";
import { StyleMain } from "./style";

const Home = () => {
  return (
    <>
      <Header />
      <StyleMain>
        <StartText />
        <FooterWaves />
      </StyleMain>
    </>
  );
};

export default Home;

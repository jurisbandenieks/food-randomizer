import logo from "../../assets/openai.png";
import "./styles.scss";

const Footer = () => {
  return (
    <footer className="container footer">
      Powered by <img src={logo} alt="OpenAI" className="footer__logo" />
    </footer>
  );
};

export default Footer;

import { useGlobalContex } from "./utils/global.context";
import "./css/footer.css";

const Footer = () => {
  const { state } = useGlobalContex();
  return (
    <footer
      className={`ligthf ${
        state.theme == "dark" ? "darkFooter" : "ligthFooter"
      }`}
    >
      <div className="f">
        <p>Powered by</p>
        <img
          className="imgF"
          src="/images/f197059f-7cf3-4a35-a182-314ea08cb560_LogoHeader.svg"
        />
      </div>

      <div className="redes">
        <img src="../../public/images/ico-instagram.png" alt="" />
        <img src="../../public/images/ico-tiktok.png" alt="" />
        <img src="../../public/images/ico-whatsapp.png" alt="" />
        <img src="../../public/images/ico-facebook.png" alt="" />
      </div>
    </footer>
  );
};

export default Footer;

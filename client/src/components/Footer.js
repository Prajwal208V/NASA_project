import { Footer as ArwesFooter, Paragraph } from "arwes";
import Centered from "./Centered";

const Footer = () => {
  return <ArwesFooter animate>
    <Centered>
      <p style={{ fontSize: 14, margin: "10px 35px" ,}}>
        This is not an official site and is not affiliated with NASA or SpaceX in any way. For Practice purposes only. ©Prajwal V 2022.
      </p>
    </Centered>
  </ArwesFooter>
};

export default Footer;

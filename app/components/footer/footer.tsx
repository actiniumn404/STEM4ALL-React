import "./footer.scss"
import {INSTAGRAM, LINKEDIN} from "~/components/constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faLinkedin, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";

export default function Footer(){
    return <>
        <footer>
            <div className="left">
                Copyright &copy; 2026 STEM for All
            </div>

            <div className="right">
                <div className="footer-email">
                    stem4allorg@gmail.com
                </div>
                <div className="footer-contact small-button">
                    Contact Us
                </div>

                <FooterIcon URL={INSTAGRAM} icon={faInstagram}></FooterIcon>
                <FooterIcon URL={LINKEDIN} icon={faLinkedinIn}></FooterIcon>
            </div>
        </footer>
    </>
}

function FooterIcon({URL, icon}){
    return <>
        <div className="footer-icon">
            <a href={URL}>
                <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
            </a>
        </div>
    </>
}
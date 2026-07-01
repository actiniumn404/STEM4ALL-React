import "./footer.scss"
import {EMAIL, INSTAGRAM, LINKEDIN} from "~/components/constants";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faInstagram, faLinkedin, faLinkedinIn} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";

export default function Footer(){
    const [useFullEmail, setUseFullEmail] = useState(true)

    useEffect(() => {
        // Defines handler within effect for current scope
        const handler = () => setUseFullEmail(window.innerWidth > 950);
        window.addEventListener('resize', handler);
        return () => window.removeEventListener('resize', handler);
    }, []);


    return <>
        <footer>
            <div className="left">
                <div className="logo">
                    <div className="logo-image">
                        <img src="/assets/logo-white.png" alt="STEM4ALL Logo" />
                    </div>
                    <div className="logo-text">
                        <div className="logo-title">STEM 4 ALL</div>
                        <div className="logo-description">Making STEM Accessible For All</div>
                    </div>
                </div>
            </div>

            <div className="right">
                <a href="contact"><div className="footer-contact">
                    Contact Us
                </div></a>
                { useFullEmail ?
                    <a href={"mailto:"+EMAIL} target="_blank">
                        <div className="footer-email">
                            {EMAIL} <FontAwesomeIcon icon={faUpRightFromSquare}/>
                        </div>
                    </a>
                    :
                    <FooterIcon URL={"mailto:"+EMAIL} icon={faEnvelope}></FooterIcon>
                }


                <FooterIcon URL={INSTAGRAM} icon={faInstagram}></FooterIcon>
                <FooterIcon URL={LINKEDIN} icon={faLinkedinIn}></FooterIcon>
            </div>
        </footer>
    </>
}

function FooterIcon({URL, icon}){
    return <>
        <div className="small-button footer-icon">
            <a href={URL} target="_blank">
                <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
            </a>
        </div>
    </>
}
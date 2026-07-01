import Navbar from "~/components/navbar/navbar";
import Footer from "~/components/footer/footer";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faUpRightFromSquare} from "@fortawesome/free-solid-svg-icons";

import "./contact.scss"
import {faInstagram, faLinkedin} from "@fortawesome/free-brands-svg-icons";
import {DESCRIPTION, EMAIL, INSTAGRAM, INSTAGRAM_NAME, LINKEDIN, LINKEDIN_NAME} from "~/components/constants";

import type {Route} from "./+types/home";
import Section from "~/components/section/section";
export function meta({}: Route.MetaArgs) {
    return [
        {title: "Contact - STEM4ALL"},
        {name: "description", content: DESCRIPTION},
    ];
}

export default function Contact(){
    return <>
        <Navbar></Navbar>
        <Header></Header>
        <Form></Form>
        <Footer></Footer>
    </>
}

function Header(){
    return <div className="section" id="header">
        <div className="left">
            <h1>CONTACT US</h1>
            <p>Feel free to reach us through our accounts to the right, or use the form below!</p>
        </div>
        <div className="right method-wrapper">
            <Method icon={faEnvelope} link={"mailto:"+EMAIL}>{EMAIL}</Method>
            <Method icon={faInstagram} link={INSTAGRAM}>{INSTAGRAM_NAME}</Method>
            <Method icon={faLinkedin} link={LINKEDIN}>{LINKEDIN_NAME}</Method>
        </div>
    </div>
}

function Method({icon, link, children}){
    return <>
        <a target="_blank" href={link} className="method-link">
            <div className="method">
                <div className="method-text">
                    <FontAwesomeIcon icon={icon} className="fa" />{children}
                </div>
                <FontAwesomeIcon icon={faUpRightFromSquare}/>
            </div>
        </a>
    </>
}

function Form(){
    return <Section title="Contact Form" section_id="form-section">
        <iframe id="form" src="https://docs.google.com/forms/d/e/1FAIpQLSdIufcTwxpUxCqzbzfehD1YZiNfK3E0pg0hBGHc-ot8xO2uww/viewform?embedded=true" frameBorder="0" marginHeight="0" marginWidth="0" height="1000">Loading…</iframe>
    </Section>
}
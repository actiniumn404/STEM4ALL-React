import type {Route} from "./+types/home";
import "./lander.scss"
import Navbar from "~/components/navbar/navbar";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faSchool,
    faClock,
    faPeopleGroup,
    faUserGraduate,
    faArrowRight,
    faMinus, faPlus
} from '@fortawesome/free-solid-svg-icons'
import Footer from "~/components/footer/footer";
import {useState} from "react";

export function meta({}: Route.MetaArgs) {
    return [
        {title: "Stem 4 All"},
        {name: "description", content: "TODO: Change this later"},
    ];
}

export default function Lander() {
    return <>
        <Navbar></Navbar>

        <div className="hero">
            <h1 className="hero-text">Making STEM Accessible For <span className="hero-text-highlight">All</span></h1>
        </div>

        <div className="section" id="mission">
            <div className="section-header">
                <h1 className="section-header-text">Our Mission</h1>
            </div>

            <div className="section-content">
                <div className="text-image-side-by-side">
                    <div className="left">
                        We make STEM accessible through low-cost, hands-on learning experiences for elementary students
                        while
                        empowering student leaders to teach and inspire their communities.
                    </div>
                    <div className="right">
                        <img src="/app/assets/lander-mission.png" alt="Photograph from one of Stem 4 All's clubs"/>
                    </div>
                </div>
            </div>
        </div>

        <div className="section" id="figures_section">
            <div className="section-header">
                <h1 className="section-header-text">Our Impact in Numbers</h1>
            </div>
            <div className="section-content" id="figures_wrapper">
                <Figure icon={faSchool} caption={"2 STEM Clubs"}></Figure>
                <Figure icon={faClock} caption={"X Volunteer Hours"}></Figure>
                <Figure icon={faPeopleGroup} caption={"X Volunteers"}></Figure>
                <Figure icon={faUserGraduate} caption={"X Students"}></Figure>
            </div>
        </div>

        <div className="section" id="involvement-section">
            <div className="section-header">
                <h1 className="section-header-text">Get Involved</h1>
            </div>
            <div className="section-content" id="involvement-wrapper">
                <InvolvementMethod imageURL="app/assets/lander-kids-1.png"
                                   title="Volunteer with us!"
                                   caption="Earn hours while helping teach and run local STEM Clubs!"
                                   link="TODO"
                ></InvolvementMethod>

                <InvolvementMethod imageURL="app/assets/lander-kids-2.png"
                                   title="Start a STEM Club!"
                                   caption="Create a local STEM Club, gaining leadership and teaching students! "
                                   link="TODO"
                ></InvolvementMethod>

                <InvolvementMethod imageURL="app/assets/lander-kids-3.png"
                                   title="Join our team!"
                                   caption="Expand and manage STEM Clubs, develop curriculum, and more!"
                                   link="TODO"
                ></InvolvementMethod>
            </div>
        </div>

        <div className="section" id="faq-section">
            <div className="section-header">
                <h1 className="section-header-text">Frequently Asked Questions</h1>

                <div className="section-content" id="faq-wrapper">
                    <Question question="Question" response="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "></Question>
                    <Question question="Question" response="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "></Question>
                    <Question question="Question" response="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "></Question>
                </div>
            </div>
        </div>

        <Footer></Footer>
    </>;
}

function Figure({icon, caption}){
    return <>
        <div className="figures-figure">
            <div className="figures-figure-icon"> <FontAwesomeIcon icon={icon} /></div>
            <div className="figures-figure-caption">{caption}</div>
        </div>
    </>;
}

function InvolvementMethod({imageURL, title, caption, link}){
    return <>
        <div className="involvement-card">
            <div className="involvement-icon" style={{backgroundImage:`url(${imageURL})`}}></div>

            <div className="involvement-text">
                <div className="involvement-title">{title}</div>
                <div className="involvement-caption">{caption}</div>
                <a href={link}>
                    <button className="small-button">Learn More <FontAwesomeIcon icon={faArrowRight} /></button>
                </a>
            </div>
        </div>
    </>;
}

function Question({question, response}){
    const [isOpen, setIsOpen] = useState(false);

    function toggle(){
        setIsOpen(!isOpen)
    }

    return <>
        <div className="faq-question-wrapper">
            <div className="faq-question" onClick={toggle}>
                <div className="left">{question}</div>
                <FontAwesomeIcon className="right faq-icon" icon={isOpen ? faMinus : faPlus}/>
            </div>
            <div className={`faq-response ${isOpen ? 'open' : 'closed'}`}>
                {response}
            </div>
        </div>
    </>
}
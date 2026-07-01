import Navbar from "~/components/navbar/navbar";
import "./about.scss"
import {faBook, faLightbulb, faPeopleGroup} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Footer from "~/components/footer/footer";
import Section from "~/components/section/section";
import {DESCRIPTION} from "~/components/constants";

import type {Route} from "./+types/home";
export function meta({}: Route.MetaArgs) {
    return [
        {title: "About - STEM4ALL"},
        {name: "description", content: DESCRIPTION},
    ];
}


export default function About(){
    return <>
        <Navbar></Navbar>
        <Header></Header>
        <Curriculum></Curriculum>
        <Goals></Goals>
        <Photos></Photos>
        <Footer></Footer>
    </>
}

function Header(){
    return <div className="section" id="header">
        <div className="left">
            <h1>ABOUT US</h1>
            <p>We are an official <span>501c(3)</span> nonprofit based in the Puget Sound area of Washington, US. Starting as just a local STEM Club, we are striving to expand our growth and impact, inspiring young kids across all communities to find interest and joy in STEM!</p>
        </div>
        <div className="right">
            <img src="/assets/about-hero.png" alt="Photograph from a STEM4ALL Club" />
        </div>
    </div>
}

function Curriculum(){
    return <Section section_id="curriculum" section_content_id="" title="Low-Cost STEM Curriculum">
        <p>Many barriers to equitable STEM education exist. To increase the accessibility of our clubs and STEM activities, our curriculum is designed to be low-cost and consist of reusable items, while maintaining educational quality and hands-on fun! </p>
        <div className="two-image-side-by-side">
            <div><img src="/assets/about-invisible-ink.png" alt="Instructions to make invisible ink" /></div>
            <div><img src="/assets/about-robotic-hand.png" alt="Robotic hand instructions" /></div>
        </div>
    </Section>
}

function Goals(){
    return <Section section_id="goals" section_content_id="goals-wrapper" title="Our Goals">
        <Goal number="ONE" icon={faLightbulb}>Inspire students' interest and confidence to pursue STEM.</Goal>
        <Goal number="TWO" icon={faPeopleGroup}>Increase access to STEM education across communities.</Goal>
        <Goal number="THREE" icon={faBook}>Create fun and inclusive afterschool learning environments</Goal>
    </Section>
}

function Goal({number, icon, children}){
    return <>
        <div className="goal">
            <div className="goal-icon"><FontAwesomeIcon icon={icon}></FontAwesomeIcon></div>
            <div className="goal-number">GOAL {number}</div>
            <div className="goal-text">{children}</div>
        </div>
    </>
}

function Photos(){
    return <Section section_id="photos" section_content_id="photos-wrapper" title="Photos from our Clubs!">
        <Photo URL="/assets/about-club-1.png" />
        <Photo URL="/assets/about-club-2.png" />
        <Photo URL="/assets/about-club-3.png" />
        <Photo URL="/assets/about-club-4.png" />
    </Section>
}

function Photo({URL}){
    return <div className="photo"><img src={URL} alt="Photo of a STEM4ALL club"/></div>
}
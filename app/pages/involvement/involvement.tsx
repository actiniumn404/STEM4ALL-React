import "./involvement.scss"
import Navbar from "~/components/navbar/navbar";
import Section from "~/components/section/section";
import {faHeart, faPerson, faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function Involvement(){
    return <>
        <Navbar></Navbar>
        <Header></Header>
        <Section></Section>
    </>
}

function Header(){
    return <div className="section" id="header">
        <div className="left">
            <h1>GET INVOLVED</h1>
            <p>There are many ways to be part of our mission and an active member of our organization, whether you’re looking for volunteer hours, leadership opportunities, or more.
                There are three different positions and roles to explore!</p>
        </div>
        <div className="right">
            <Method icon={faHeart} link="#Volunteer">Volunteer</Method>
            <Method icon={faStar} link="#Leader">Club Leader</Method>
            <Method icon={faPerson} link="#Member">Team Member</Method>
        </div>
    </div>
}

function Method({icon, link, children}){
    return <>
        <a href={link}><button className="involvement-method">
            <FontAwesomeIcon icon={icon} className="fa" />  {children}
        </button></a>
    </>
}
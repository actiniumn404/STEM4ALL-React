import "./team.scss"
import Section from "~/components/section/section";
import Navbar from "~/components/navbar/navbar";
import {DESCRIPTION} from "~/components/constants";

import type {Route} from "./+types/home";
export function meta({}: Route.MetaArgs) {
    return [
        {title: "Meet the Team - STEM4ALL"},
        {name: "description", content: DESCRIPTION},
    ];
}

export default function Team(){
    return <>
        <Navbar></Navbar>
        <Header></Header>
    </>
}

function Header(){
    return <div className="section" id="header">
        <div className="left">
            <h1>MEET THE TEAM</h1>
            <p>We make everything happen!</p>
        </div>
        <div className="right">
        </div>
    </div>
}
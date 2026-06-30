import type {Route} from "./+types/home";
import "./lander.scss"
import Navbar from "~/components/navbar/navbar";

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

        <div className="section" id="figures">
            <div className="section-header">
                <h1 className="section-header-text">Our Mission</h1>
            </div>
            <div className="section-content">
                <div className="figures-figure">
                    <div className="figures-figure-icon"></div>
                    <div className="figures-figure-caption">2 STEM Clubs</div>
                </div>
            </div>
        </div>


    </>;
}

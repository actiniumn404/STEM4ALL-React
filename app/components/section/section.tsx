import "./section.scss"
import FadeInSection from "~/components/FadeIn";

export default function Section({section_id, section_content_id, title, children, fadein=true}){
    if (fadein){
        return <div className="section" id={section_id}>
            <FadeInSection>
                <div className="section-header">
                    <h1 className="section-header-text">{title}</h1>
                </div>
            </FadeInSection>
            <FadeInSection>
                <div className="section-content" id={section_content_id}>
                    {children}
                </div>
            </FadeInSection>

        </div>
    }else{
        return <div className="section" id={section_id}>
            <div className="section-header">
                <h1 className="section-header-text">{title}</h1>
            </div>
            <div className="section-content" id={section_content_id}>
                {children}
            </div>

        </div>
    }

}
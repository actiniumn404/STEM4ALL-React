import "./section.scss"

export default function Section({section_id, section_content_id, title, children}){
    return <div className="section" id={section_id}>
        <div className="section-header">
            <h1 className="section-header-text">{title}</h1>
        </div>

        <div className="section-content" id={section_content_id}>
            {children}
        </div>
    </div>
}
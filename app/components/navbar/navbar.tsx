import "./navbar.scss"

const nav_links = {
    "About Us": "/about",
    "Get Involved": "/get-involved",
    "Team": "/team",
    "Login": "/login"
}

export default function Navbar(){
    return <>
        
        <nav>
            <div className="left">
                <div className="nav-logo-wrapper">
                    <a className="nav-link" href="/">
                        <img src="/app/assets/logo.png"  alt="Stem4All Logo" className="nav-logo" />
                    </a>
                </div>
            </div>

            <div className="right">
                {
                    Object.entries(nav_links).map(([caption, link]) => (
                        <div className="nav-link-wrapper">
                            <a key={caption} href={link} className="nav-link">{caption}</a>
                        </div>
                    ))
                }

                <div className="nav-contact-button">
                    Contact Us
                </div>

                <div className="nav-contact">
                    <a href=""><i className="fa-brands fa-instagram"></i></a>
                </div>
                <div className="nav-contact">
                    <a href=""><i className="fa-brands fa-square-linkedin"></i></a>
                </div>
            </div>


        </nav>
    </>
}
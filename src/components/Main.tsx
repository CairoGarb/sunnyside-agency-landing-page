import { useState } from "react"
import "./Main.css"

export function Main() {

    const [isMobile, setIsMobile] = useState(false)

    const toggleMenu = () => {
        setIsMobile(!isMobile);
    };

    return (
        <div className="mainContainer">
            <div className="header">
                <nav>
                    <div className="logo">
                        <img src="./logo.svg" alt="logo"></img>
                    </div>
                    <div id="menu"
                        className={`menu ${isMobile ? "active" : ""}`}
                        >
                        <ul>
                            <li>About</li>
                            <li>Services</li>
                            <li>Projects</li>
                        </ul>
                        <button>Contact</button>
                    </div>
                    <div className="mobileMenuBar" onClick={toggleMenu}>
                        <i className="fa-solid fa-bars"></i>
                    </div>
                </nav>
            </div>
            <div className="main">
                <h1>We are creatives</h1>
                {/* <img src="./icon-arrow-down.svg" alt="arrow down" /> */}
            </div>
        </div>
    )
}
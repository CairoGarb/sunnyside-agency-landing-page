import "./Footer.css"

export function Footer() {
    return (
        <div className="footerContainer">
            <img src="./logoFooter.svg" alt="logo" />
            <div className="navFooter">
                <ul>
                    <li>About</li>
                    <li>Services</li>
                    <li>Projects</li>
                </ul>
            </div>
            <div className="socialMedias">
                <div>
                    <i className="fa-brands fa-square-facebook"></i>
                </div>
                <div>
                    <i className="fa-brands fa-instagram"></i>
                </div>
                <div>
                    <i className="fa-brands fa-twitter"></i>
                </div>
                <div>
                    <i className="fa-brands fa-pinterest"></i>
                </div>
            </div>
        </div>
    )
}
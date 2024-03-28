import "./GraphicPhoto.css"

export function GraphicPhoto() {
    return (
        <div className="gpContainer">
            <div className="graphic">
                <div className="gText">
                    <h2>Graphic Design</h2>
                    <p>Great design makes you memorable. We deliver
                        artwork that underscores your brand message
                        and captures potential clients' attention.
                    </p>
                </div>
            </div>
            <div className="photo">
                <div className="pText">
                    <h2>Photography</h2>
                    <p>Increase your credibility by getting the most
                        stunning, high-quality photos that improve your
                        business image.</p>
                </div>
            </div>
        </div>
    )
}
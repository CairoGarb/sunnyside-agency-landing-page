import "./Client.css"

export function Client() {
    return (
        <div className="clientContainer">
            <h2>Client Testimonials</h2>
            <div className="clients">
                <div className="emily">
                    <img src="./image-emily.jpg" alt="emily"/>
                    <p>We put out trust in Sunnyside and they
                        delivered, making sure our needs were met
                        and deadlines were always hit.
                    </p>
                    <div className="eName">
                        <h3>Emily R.</h3>
                        <p>Marketing Director</p>
                    </div>
                </div>
                <div className="thomas">
                    <img src="./image-thomas.jpg" alt="thomas"/>
                    <p>Sunnyside's enthusiasm coupled with their
                        keen interest in our brand's sucess made it
                        a satisfying and enjoyable experience.
                    </p>
                    <div className="tName">
                        <h3>Thomas S.</h3>
                        <p>Chief Operating Officer</p>
                    </div>
                </div>
                <div className="jennie">
                    <img src="./image-jennie.jpg" alt="jennie"/>
                    <p>Incredible end result! Our sales increased 
                        over 400% when we worked with Sunnyside. 
                        Highly recommended!
                    </p>
                    <div className="jName">
                        <h3>Jennie F.</h3>
                        <p>Business Owner</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
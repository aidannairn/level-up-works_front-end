import "../../styles/project-library-v/projectLibrarySidebar.css";

export default function ProjectLibrarySidebar({ sub, type, year, matter }) {
    return (
        <>
            <div className="pl-sb-container">
                <div className="pl-sb-subscription">
                    <h4 className="pl-sb-border">SUBSCRIPTION</h4>
                    <label className="pl-sb-options">
                        <input
                            name="subscription"
                            type="radio"
                            value="Free"
                            defaultChecked
                            onClick={sub}
                        />
                        Free
                    </label>
                    <br />
                    <label className="pl-sb-options">
                        <input
                            name="subscription"
                            readOnly
                            type="radio"
                            value="Premium"
                            onClick={sub}
                        />
                        Premium
                    </label>
                    <br />
                </div>
                <div className="pl-sb-activity">
                    <h4 className="pl-sb-border">ACTIVITY TYPE</h4>
                    <label className="pl-sb-options">
                        <input
                            name="activity"
                            defaultChecked
                            value="Animation"
                            type="radio"
                            onClick={type}
                        />
                        Animation
                    </label>
                    <br />
                    <label className="pl-sb-options">
                        <input
                            name="activity"
                            readOnly
                            value="Game"
                            type="radio"
                            onClick={type}
                        />
                        Game
                    </label>
                    <br />
                    <label className="pl-sb-options">
                        <input
                            name="activity"
                            readOnly
                            value="Chat"
                            type="radio"
                            onClick={type}
                        />
                        Chat
                    </label>
                    <br />
                    <label className="pl-sb-options">
                        <input
                            name="activity"
                            readOnly
                            value="Augmented Reality"
                            type="radio"
                            onClick={type}
                        />
                        Augmented Reality
                    </label>
                    <br />
                </div>
                <div className="pl-sb-year">
                    <h4 className="pl-sb-border">YEAR LEVEL</h4>
                    <label className="pl-sb-options">
                        <input
                            name="year"
                            defaultChecked
                            value="1 - 4"
                            type="radio"
                            onClick={year}
                        />
                        1 - 4
                    </label>
                    <br />
                    <label className="pl-sb-options">
                        <input
                            name="year"
                            readOnly
                            value="5 - 6"
                            type="radio"
                            onClick={year}
                        />
                        5 - 6
                    </label>
                    <br />
                    <label className="pl-sb-options">
                        <input
                            name="year"
                            readOnly
                            value="7 - 8"
                            type="radio"
                            onClick={year}
                        />
                        7 - 8
                    </label>
                    <br />
                    <label className="pl-sb-options">
                        <input
                            name="year"
                            readOnly
                            value="9 - 13"
                            type="radio"
                            onClick={year}
                        />
                        9 - 13
                    </label>
                    <br />
                </div>
                <div className="pl-sb-subject">
                    <h4 className="pl-sb-border">SUBJECT MATTER</h4>
                    <label className="pl-sb-options">
                        <input
                            name="subject"
                            defaultChecked
                            value="Computer Science"
                            type="radio"
                            onClick={matter}
                        />
                        Computer Science
                    </label>
                    <br />
                    <label className="pl-sb-options">
                        <input
                            name="subject"
                            readOnly
                            value="Maths"
                            type="radio"
                            onClick={matter}
                        />
                        Maths
                    </label>
                    <br />
                    <label className="pl-sb-options">
                        <input
                            name="subject"
                            readOnly
                            value="Science"
                            type="radio"
                            onClick={matter}
                        />
                        Science
                    </label>
                    <br />
                    <label className="pl-sb-options">
                        <input
                            name="subject"
                            readOnly
                            value="Language"
                            type="radio"
                            onClick={matter}
                        />
                        Language
                    </label>
                    <br />
                    <label className="pl-sb-options">
                        <input
                            name="subject"
                            readOnly
                            value="Art"
                            type="radio"
                            onClick={matter}
                        />
                        Art
                    </label>
                    <br />
                    <label className="pl-sb-options">
                        <input
                            name="subject"
                            readOnly
                            value="Music"
                            type="radio"
                            onClick={matter}
                        />
                        Music
                    </label>
                    <br />
                </div>
            </div>
        </>
    );
}

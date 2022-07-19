import { useState } from "react";
import "../../styles/project-library-v/projectLibraryFilterButtons.css";

export default function ProjectLibraryFilterButtons({
    levelFilter,
    changeAmount,
}) {
    const [filterLevel, setFilterLevel] = useState("BEGINNER");
    const changeLevel = (e) => setFilterLevel(e.target.value);

    const [filterAmount, setFilterAmount] = useState("25");
    const changeShown = (e) => setFilterAmount(e.target.value);

    const styledButton = {
        backgroundColor: "rgb(0, 106, 245)",
        color: "white",
    };

    return (
        <>
            <div className="pl-btn-container">
                <div className="pl-left-btn">
                    {filterLevel === "BEGINNER" ? (
                        <button
                            style={styledButton}
                            className="pl-filter-btn first-pl"
                        >
                            BEGINNER
                        </button>
                    ) : (
                        <button
                            value="BEGINNER"
                            onClick={changeLevel}
                            className="pl-filter-btn first-pl"
                            onClickCapture={levelFilter}
                        >
                            BEGINNER
                        </button>
                    )}
                    {filterLevel === "INTERMEDIATE" ? (
                        <button style={styledButton} className="pl-filter-btn">
                            INTERMEDIATE
                        </button>
                    ) : (
                        <button
                            value="INTERMEDIATE"
                            onClick={changeLevel}
                            className="pl-filter-btn"
                            onClickCapture={levelFilter}
                        >
                            INTERMEDIATE
                        </button>
                    )}
                    {filterLevel === "ADVANCED" ? (
                        <button
                            style={styledButton}
                            className="pl-filter-btn last-pl"
                        >
                            ADVANCED
                        </button>
                    ) : (
                        <button
                            value="ADVANCED"
                            onClick={changeLevel}
                            className="pl-filter-btn last-pl"
                            onClickCapture={levelFilter}
                        >
                            ADVANCED
                        </button>
                    )}
                </div>
                <div className="pl-right-btn">
                    <span className="pl-right-text">SHOW &nbsp;</span>
                    {filterAmount === "5" ? (
                        <button
                            style={styledButton}
                            className="pl-filter-btn first-pl"
                        >
                            5
                        </button>
                    ) : (
                        <button
                            value="5"
                            onClick={changeShown}
                            className="pl-filter-btn first-pl"
                            onClickCapture={changeAmount}
                        >
                            5
                        </button>
                    )}
                    {filterAmount === "10" ? (
                        <button style={styledButton} className="pl-filter-btn">
                            10
                        </button>
                    ) : (
                        <button
                            value="10"
                            onClick={changeShown}
                            className="pl-filter-btn"
                            onClickCapture={changeAmount}
                        >
                            10
                        </button>
                    )}
                    {filterAmount === "100" ? (
                        <button
                            style={styledButton}
                            className="pl-filter-btn last-pl"
                        >
                            100
                        </button>
                    ) : (
                        <button
                            value="100"
                            onClick={changeShown}
                            className="pl-filter-btn last-pl"
                            onClickCapture={changeAmount}
                        >
                            100
                        </button>
                    )}
                </div>
            </div>
        </>
    );
}

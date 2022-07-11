import MainHeader from "../header/MainHeader";
import ProjectLibrarySidebar from "./projectLibrarySidebar";
import ProjectLibraryMain from "./projectLibraryMain";
import ProjectLibraryFilterButtons from "./projectLibraryFilterButtons";
import ProjectLibraryContent from "./projectLibraryContent";
import ProjectLibraryPageButtons from "./projectLibraryPageButtons";
import Footer from "../MainFooter";
import "../../styles/project-library-v/projectLibrary.css";
import { libraryData } from "../../data/project-library-data";
import { useState } from "react";

export default function ProjectLibraryTeacher() {
    const navLinks = [
        { name: "Home", route: "#" },
        { name: "Features", route: "#" },
        { name: "Teachers", route: "#" },
    ];

    const currentUser = {
        name: "Jasmina Salvador",
        image: "jasmina-salvador.png",
    };

    const data = libraryData;
    const beginner = data.filter((level) => level.level === "BEGINNER");
    const intermediate = data.filter((level) => level.level === "INTERMEDIATE");
    const advanced = data.filter((level) => level.level === "ADVANCED");

    const [filteredLevel, setFilteredLevel] = useState(data);
    const [showAmount, setShowAmount] = useState(1000);
    const [subscribe, setSubscribe] = useState("Free");

    // Gave up on the filter sidebar. Maybe approached it wrong

    // const sub1 = data.filter((level) => level.subscription === "Free");
    // const sub2 = data.filter((level) => level.subscription === "Premium");
    // const act1 = data.filter((level) => level.activityType === "Animation");
    // const act2 = data.filter((level) => level.activityType === "Game");
    // const act3 = data.filter((level) => level.activityType === "Chat");
    // const act4 = data.filter(
    //     (level) => level.activityType === "Augmented Reality"
    // );
    // const year1 = data.filter((level) => level.year === "1-4");
    // const year2 = data.filter((level) => level.year === "5-6");
    // const year3 = data.filter((level) => level.year === "7-8");
    // const year4 = data.filter((level) => level.year === "9-13");
    // const mat1 = data.filter((level) => level.subject === "Computer Science");
    // const mat2 = data.filter((level) => level.subject === "Maths");
    // const mat3 = data.filter((level) => level.subject === "Science");
    // const mat4 = data.filter((level) => level.subject === "Language");
    // const mat5 = data.filter((level) => level.subject === "Art");
    // const mat6 = data.filter((level) => level.subject === "Music");
    // const [subscribe2, setSubscribe2] = useState(subscribe);
    // const [activity, setActivity] = useState("Animation");
    // const [yearLevel, setYearLevel] = useState("1 - 4");
    // const [subject, setSubject] = useState("Computer Science");

    const levelFilter = (e) => {
        switch (e.target.value) {
            case "BEGINNER":
                return setFilteredLevel(beginner);
            case "INTERMEDIATE":
                return setFilteredLevel(intermediate);
            case "ADVANCED":
                return setFilteredLevel(advanced);
            default:
                return null;
        }
    };

    const changeAmount = (e) => {
        switch (e.target.value) {
            case "25":
                return setShowAmount(25);
            case "50":
                return setShowAmount(50);
            case "100":
                return setShowAmount(100);
            default:
                return null;
        }
    };

    const sub = (e) => {
        switch (e.target.value) {
            case "Free":
                return setSubscribe("Free");
            case "Premium":
                return setSubscribe("Premium");
            default:
                return null;
        }
    };

    // Part of the filter code from above

    // const type = (e) => {
    //     switch (e.target.value) {
    //         case "Animation":
    //             return setActivity("Animation");
    //         case "Game":
    //             return setActivity("Game");
    //         case "Chat":
    //             return setActivity("Chat");
    //         case "Augmented Reality":
    //             return setActivity("Augmented Reality");
    //         default:
    //             return null;
    //     }
    // };
    // const year = (e) => {
    //     switch (e.target.value) {
    //         case "1 - 4":
    //             return setYearLevel(year1);
    //         case "5 - 6":
    //             return setYearLevel(year2);
    //         case "7 - 8":
    //             return setYearLevel(year3);
    //         case "9 - 13":
    //             return setYearLevel(year4);
    //         default:
    //             return null;
    //     }
    // };
    // const matter = (e) => {
    //     switch (e.target.value) {
    //         case "Computer Science":
    //             return setSubject(mat1);
    //         case "Maths":
    //             return setSubject(mat2);
    //         case "Science":
    //             return setSubject(mat3);
    //         case "Language":
    //             return setSubject(mat4);
    //         case "Art":
    //             return setSubject(mat5);
    //         case "Music":
    //             return setSubject(mat6);
    //         default:
    //             return null;
    //     }
    // };

    return (
        <>
            <MainHeader
                layout="1"
                navLinks={navLinks}
                currentUser={currentUser}
            />
            <div className="pl-container">
                <ProjectLibrarySidebar
                    sub={sub}
                    // year={year}
                    // type={type}
                    // matter={matter}
                />
                <div className="pl-body">
                    <ProjectLibraryMain />
                    <ProjectLibraryFilterButtons
                        levelFilter={levelFilter}
                        changeAmount={changeAmount}
                    />
                    <div className="pl-body-direction">
                        {filteredLevel
                            .filter((level) => level.subscription === subscribe)
                            .filter((id, index) => index < showAmount)
                            .map((item, index) => (
                                <ProjectLibraryContent
                                    key={index}
                                    item={item}
                                />
                            ))}
                    </div>
                    <ProjectLibraryPageButtons />
                </div>
            </div>
            <Footer />
        </>
    );
}

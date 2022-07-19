import MainHeader from "../header/MainHeader";
import ProjectLibrarySidebar from "./projectLibrarySidebar";
import ProjectLibraryMain from "./projectLibraryMain";
import ProjectLibraryFilterButtons from "./projectLibraryFilterButtons";
import ProjectLibraryContent from "./projectLibraryContent";
import ProjectLibraryPageButtons from "./projectLibraryPageButtons";
import Footer from "../MainFooter";
import Loading from "../Loading";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../../styles/project-library-v/projectLibrary.css";

export default function ProjectLibraryTeacher() {
    const [projectData, setProjectData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [courseLevel, setCourseLevel] = useState("Beginner");
    const [subscribe, setSubscribe] = useState("Free");
    const [showAmount, setShowAmount] = useState(1000);
    const [teacherName, setTeacherName] = useState([]);
    const [teacherPic, setTeacherPic] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/project-library`).then((res) => {
            console.log(`res`, res.data[0].profilepic);
            setProjectData(res.data);
            setTeacherName(`${res.data[0].firstname} ${res.data[0].lastname}`);
            setTeacherPic(res.data[0].profilepic);
            setIsLoading(false);
        });
    }, []);

    const navLinks = [
        { name: "Home", route: "/" },
        { name: "Features", route: "#" },
        { name: "Teachers", route: "#" },
    ];

    const currentUser = {
        name: teacherName,
        image: teacherPic,
    };

    const levelFilter = (e) => {
        switch (e.target.value) {
            case "BEGINNER":
                return setCourseLevel("Beginner");
            case "INTERMEDIATE":
                return setCourseLevel("Intermediate");
            case "ADVANCED":
                return setCourseLevel("Advanced");
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

    const changeAmount = (e) => {
        switch (e.target.value) {
            case "5":
                return setShowAmount(5);
            case "10":
                return setShowAmount(10);
            case "100":
                return setShowAmount(100);
            default:
                return null;
        }
    };

    const navigate = useNavigate();

    const click = (e) => {
        if (e.target.id === "1") {
            navigate("/project-submission");
        }
    };
    if (isLoading) {
        return <Loading />;
    }
    return (
        <>
            <MainHeader
                layout="1"
                navLinks={navLinks}
                currentUser={currentUser}
            />
            <div className="pl-container">
                <ProjectLibrarySidebar sub={sub} />
                <div className="pl-body">
                    <ProjectLibraryMain />
                    <ProjectLibraryFilterButtons
                        levelFilter={levelFilter}
                        changeAmount={changeAmount}
                    />
                    <div className="pl-body-direction">
                        {projectData
                            .filter((i) => i.course === courseLevel)
                            .filter((i) => i.subscription === subscribe)
                            .filter((i, index) => index < showAmount)
                            .map((item, index) => (
                                <ProjectLibraryContent
                                    key={index}
                                    item={item}
                                    click={click}
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

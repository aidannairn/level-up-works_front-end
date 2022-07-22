import ProjectLibraryHeader from "../components/project-library-v/projectLibraryHeader";
import ProjectLibrarySidebar from "../components/project-library-v/projectLibrarySidebar";
import ProjectLibraryMain from "../components/project-library-v/projectLibraryMain";
import ProjectLibraryFilterButtons from "../components/project-library-v/projectLibraryFilterButtons";
import ProjectLibraryContent from "../components/project-library-v/projectLibraryContent";
import ProjectLibraryPageButtons from "../components/project-library-v/projectLibraryPageButtons";
import Footer from "../components/MainFooter";
import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/project-library-v/projectLibrary.css";
import LoadingScreen from "../components/LoadingScreen";

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
        return <LoadingScreen />;
    }
    return (
        <>
            <ProjectLibraryHeader teacherName={teacherName} teacherPic={teacherPic} />
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

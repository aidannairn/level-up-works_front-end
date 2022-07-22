import MainHeader from "../components/header/MainHeader";
import "../styles/projectSubmission.css";
import ProjectBuilder from "../components/project-builder/ProjectBuilder";
import HelpRequests from "../components/project-submission/HelpRequests";
import ProgressTracker from "../components/project-submission/ProgressTracker";
import ProjectLibrary from "../components/project-submission/ProjectLibrary";
import StudentProfiles from "../components/project-submission/StudentProfiles";
import ProjectSubmissionPage from "../components/project-submission/ProjectSubmissionPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const currentUser = {
    name: "Jasmina Salvador",
    image: "jasmina-salvador.png",
};

const navBtns = [
    {
        name: "Take Screenshot",
        action: "",
    },
    { name: "Help Center", action: "" },
    { name: "More Projects", action: "" },
];

const helpRequests = {
    id: "helpRequests",
    component: HelpRequests, // Remember to import this component at the top
    menuItem: "Help Requests",
    icon: "help-icon.png",
};
const progressTracker = {
    id: "progressTracker",
    component: ProgressTracker, // Remember to import this component at the top
    menuItem: "Progress Tracker",
    icon: "progress-icon.png",
};
const studentProfiles = {
    id: "studentProfiles",
    component: StudentProfiles, // Remember to import this component at the top
    menuItem: "Student Profiles",
    icon: "student-icon.png",
};
const projectLibrary = {
    id: "projectLibrary",
    component: ProjectLibrary, // Remember to import this component at the top
    menuItem: "Project Library",
    icon: "library-icon.png",
};
const projectSubmission = {
    id: "projectSubmission",
    component: ProjectSubmissionPage, // Remember to import this component at the top
    menuItem: "Project Submissions",
    icon: "submit-icon.png",
};

const projectItems = [
    progressTracker,
    studentProfiles,
    helpRequests,
    projectSubmission,
    projectLibrary,
];

export default function ProjectSubmissionTest() {
    return (
        <>
            <div className="project-submission-container">
                <MainHeader layout="2" navBtns={navBtns} />
                <ProjectBuilder
                    projectItems={projectItems}
                    currentUser={currentUser}
                />
            </div>
        </>
    );
}
import MainHeader from "../components/header/MainHeader";
import ProjectBuilder from "../components/project-builder/ProjectBuilder";
import StudentProfiles from "../components/studentProfiles/StudentProfiles";
import ProgressTracker from "../components/progress-tracker/ProgressTracker";
import { projectLibrary, projectSubmission } from "./ProjectSubmission";

//exporting 2 components below for vinni to import into his sidebar
export const profiles = {
    id: "studentProfiles",
    component: StudentProfiles,
    menuItem: "Student Profiles",
    icon: "student-profiles.png",
};

export const tracker = {
    id: "progressTracker",
    component: ProgressTracker,
    menuItem: "Progress Tracker",
    icon: "progress-tracker.png",
};

const StudentProfileViewer = () => {
    const testScreenshotBtn = () => {
        console.log("Test screenshot button");
    };

    const navBtns = [
        { name: "Take Screenshot", action: testScreenshotBtn },
        { name: "Help Center", action: "" },
        { name: "More Projects", action: "" },
    ];

    const currentUser = {
        name: "Jasmina Salvador",
        image: "jasmina-salvador.png",
    };

    const HelpRequest = {
        id: "HelpRequest",
        menuItem: "Help Request",
        icon: "help-requests.png",
    };

    //Adding components to sidebar
    const projectItems = [
        tracker,
        profiles,
        HelpRequest,
        projectSubmission,
        projectLibrary,
    ];

    return (
        <>
            <MainHeader layout="2" navBtns={navBtns} />
            <div className="profile-viewer-container">
                <ProjectBuilder
                    projectItems={projectItems}
                    currentUser={currentUser}
                />
            </div>
        </>
    );
};

export default StudentProfileViewer;

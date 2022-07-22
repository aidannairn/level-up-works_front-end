import React from "react";
import MainHeader from "./header/MainHeader";
import ProjectLibrarySidebar from "./project-library-v/projectLibrarySidebar";
import ProjectLibraryMain from "./project-library-v/projectLibraryMain";
import ProjectLibraryFilterButtons from "./project-library-v/projectLibraryFilterButtons";
import "../styles/project-library-v/projectLibraryMain.css";

function Loading() {
    const navLinks = [
        { name: "Home", route: "#" },
        { name: "Features", route: "#" },
        { name: "Teachers", route: "#" },
    ];

    const currentUser = {
        name: "Jasmina Salvador",
        image: "jasmina-salvador.png",
    };

    return (
        <>
            <MainHeader
                layout="1"
                navLinks={navLinks}
                currentUser={currentUser}
            />
            <div className="pl-container">
                <ProjectLibrarySidebar />
                <div className="pl-body">
                    <ProjectLibraryMain />
                    <ProjectLibraryFilterButtons />
                    <h1 className="pl-main-h1">Loading Projects...</h1>
                </div>
            </div>
        </>
    );
}

export default Loading;

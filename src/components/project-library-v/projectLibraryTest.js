import React from 'react'
import MainHeader from "../header/MainHeader";
import ProjectLibrarySidebar from './projectLibrarySidebar';

export default function ProjectLibraryTest() {

    const navLinks = [
        { name: 'Home', route: '#' },
        { name: 'Features', route: '#' },
        { name: 'Teachers', route: '#' },
    ]

    const currentUser = {
        name: "Jasmina Salvador",
        image: "jasmina-salvador.png",
    };


    return (
        <>
            {/* <MainHeader layout={1} navLinks={navLinks} currentUser={currentUser} /> */}
            <ProjectLibrarySidebar />
        </>
    )
}



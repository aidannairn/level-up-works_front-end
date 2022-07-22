import React, { useEffect, useState } from "react";
import axios from "axios";
import LoadingScreen from '../components/LoadingScreen'
import MainHeader from '../components/header/MainHeader'
import MakeProject from '../components/project-builder/MakeProject'
import SubmitProject from '../components/project-builder/SubmitProject'
import ProjectBuilder from '../components/project-builder/ProjectBuilder'

<<<<<<< HEAD
import MainHeader from "../components/header/MainHeader";
import MakeProject from "../components/project-builder/MakeProject";
import SubmitProject from "../components/project-builder/SubmitProject";
import ProjectBuilder from "../components/project-builder/ProjectBuilder";
import LoadingScreen from "../components/LoadingScreen";
=======
>>>>>>> main

const StudentBuilder = () => {
    const [projectIndex, setProjectIndex] = useState(0);
    const [project, setProject] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [projectBarCount, setProjectBarCount] = useState(0);

    const { REACT_APP_URL: url } = process.env

    useEffect(() => {
<<<<<<< HEAD
        axios.get(`${host}${port}/student/project/`).then((res) => {
            setProjectBarCount(res.data.totalProjects);
        });
    }, []);
=======
      axios.get(`${url}/student/project/`)
      .then(res => { setProjectBarCount(res.data.totalProjects) })
    }, [])
  
    useEffect(() => {
      setProject({})
      axios.get(`${url}/student/project/${projectIndex + 1}`)
      .then(res => { 
        setProject(res.data)
      })
    }, [projectIndex])
>>>>>>> main

    useEffect(() => {
        setProject({});
        axios
<<<<<<< HEAD
            .get(`${host}${port}/student/project/${projectIndex + 1}`)
=======
            .get(`${url}/student/project/${projectIndex + 1}`)
>>>>>>> main
            .then((res) => {
                console.log(res.data);
                setProject(res.data);
            });
    }, [projectIndex]);

    useEffect(() => {
        Object.keys(project).length === 0
            ? setIsLoading(true)
            : setIsLoading(false);
    }, [project]);

    const testScreenshotBtn = () => {
        console.log("Test screenshot button");
    };

    // START Header Props
    const navBtns = [
        { name: "Take Screenshot", action: testScreenshotBtn },
        { name: "Ask Teacher for help", action: "" },
        { name: "More Projects", action: "" },
    ];

    const projectBar = {
        name: "Introduction",
        projects: projectBarCount,
        currentProject: projectIndex,
        setProjectIndex: setProjectIndex,
    };
    // END Header Props

<<<<<<< HEAD
    const currentUser = {
        name: "Rawiri Fletcher",
        image: "rawiri-fletcher.png",
    };

    // START Student Project Builder Views
    const makeProject = {
        id: "makeProject",
        component: MakeProject,
        isArrowNavEnabled: true,
        menuItem: "Make Project",
        icon: "new-project.png",
        contents: [{ id: 1, src: "project.png" }],
    };
=======
  // START Student Project Builder Views
  const makeProject = { 
    id: 'makeProject',
    component: MakeProject,
    menuItem: 'Make Project',
    icon: 'new-project.png',
    content: 'https://llk.github.io/scratch-gui/develop/'
  }
>>>>>>> main

    const submitProject = {
        id: "submitProject",
        component: SubmitProject,
        menuItem: "Submit Project",
        icon: "submit-project.png",
        content: {
            sendPhoto: {
                id: "sendPhoto",
                heading: "Submit project photo",
                paragraph:
                    "After completing your project, take a screenshot of your project and upload it here.",
                image: "project.png",
                btnIcon: "gallery-icon.png",
                btnText: "Send Photo",
            },
            callTeacher: {
                id: "callTeacher",
                heading: "Show your teacher",
                paragraph:
                    "If your teacher is in the same room as you, click the button below to let them know you are done.",
                image: "teacher-computer.png",
                btnIcon: "teacher-chalkboard.png",
                btnText: "Call Teacher",
            },
        },
    };

    const bonusChallenge = {
        id: "bonusChallenge",
        menuItem: "Bonus Challenge",
        icon: "prize.png",
        content: {},
    };

    const takeTheQuiz = {
        id: "takeTheQuiz",
        menuItem: "Take The Quiz",
        icon: "list.png",
        content: {},
    };
    // END Student Project Builder Views

    const projectItems = [
        { learningObjectives: project.learningObjectives },
        { instructions: project.instructions },
        { video: project.video },
        makeProject,
        submitProject,
        bonusChallenge,
        takeTheQuiz,
    ];

    return isLoading ? (
        <LoadingScreen />
    ) : (
        <>
            <MainHeader layout="2" projectBar={projectBar} navBtns={navBtns} />
            <ProjectBuilder
                key={projectIndex}
                projectIndex={projectIndex}
                projectItems={projectItems}
                //currentUser={currentUser}
                isLoading
            />
        </>
    );
};

export default StudentBuilder;
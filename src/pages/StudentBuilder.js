import { useEffect, useState } from "react"
import axios from "axios"
import LoadingScreen from '../components/LoadingScreen'
import MainHeader from '../components/header/MainHeader'
import MakeProject from '../components/project-builder/MakeProject'
import SubmitProject from '../components/project-builder/SubmitProject'
import ProjectBuilder from '../components/project-builder/ProjectBuilder'

const StudentBuilder = () => {
  const [projectIndex, setProjectIndex] = useState(0)
  const [project, setProject] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [projectBarCount, setProjectBarCount] = useState(0)
  const [projectBarHeading, setProjectBarHeading] = useState('')

  const { REACT_APP_URL: url } = process.env

  useEffect(() => {
    axios.get(`${url}/student/project/`)
    .then(res => { setProjectBarCount(res.data.totalProjects) })
  }, [])

  useEffect(() => {
    setProject({})
    axios.get(`${url}/student/project/${projectIndex + 1}`)
    .then(res => {  setProject(res.data) })
  }, [projectIndex])

  useEffect(() => {
    setProject({})
    axios.get(`${url}/student/project/${projectIndex + 1}`)
      .then((res) => { setProject(res.data) })
  }, [projectIndex])

  useEffect(() => {
    if (Object.keys(project).length === 0) {
      setIsLoading(true)
    } else {
      setProjectBarHeading(project.learningObjectives.heading)
      setIsLoading(false)
    }
  }, [project])

  const testScreenshotBtn = () => {
    console.log("Test screenshot button")
  }

  // START Header Props
  const navBtns = [
    { name: "Take Screenshot", action: testScreenshotBtn },
    { name: "Ask Teacher for help", action: "" },
    { name: "More Projects", action: "" },
  ]

  const projectBar = {
    heading: projectBarHeading,
    projects: projectBarCount,
    currentProject: projectIndex,
    setProjectIndex: setProjectIndex,
  }
  // END Header Props

  // START Student Project Builder Views
  /* Project builder views are the "pages" of content that are to be rendered when an item in the Sidebar is clicked. Each project item should include a uniqueID, component to be rendered, a heading and icon to be displayed in the sidebar. There is also an optional "content" or "contents" field that can be used to pass content to the component later. */
  const makeProject = { 
    id: 'makeProject',
    component: MakeProject,
    menuItem: 'Make Project',
    icon: 'new-project.png',
    content: 'https://llk.github.io/scratch-gui/develop/'
  }

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
        projectID: project.id
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
  }

  const bonusChallenge = {
    id: "bonusChallenge",
    menuItem: "Bonus Challenge",
    icon: "prize.png",
    content: {},
  }

  const takeTheQuiz = {
    id: "takeTheQuiz",
    menuItem: "Take The Quiz",
    icon: "list.png"
  }
  // END Student Project Builder Views

  const projectItems = [
    /* The next three lines are creating a reference to three components that are being used within another page. Each row is given the content to be rendered. The project item for each row will be created in the ProjectBuilder component. */
    { learningObjectives: project.learningObjectives },
    { instructions: project.instructions },
    { video: project.video },
    makeProject,
    submitProject,
    bonusChallenge,
    takeTheQuiz,
  ]

  /* If the project is loading - render a loading screen. Otherwise render the content. */
  return isLoading ? (
    <LoadingScreen />
  ) : (
    <>
      <MainHeader layout="2" projectBar={projectBar} navBtns={navBtns} />
      <ProjectBuilder
        key={projectIndex}
        projectIndex={projectIndex}
        projectItems={projectItems}
        isLoading
      />
    </>
  )
}

export default StudentBuilder
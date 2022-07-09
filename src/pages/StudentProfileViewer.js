import MainHeader from '../Components/header/MainHeader'
import ProjectBuilder from '../Components/project-builder/ProjectBuilder'
import StudentProfiles from '../Components/studentProfiles/StudentProfiles'
import ProgressTracker from '../Components/studentProfiles/ProgressTracker'
import '../Styles/student-profile-viewer/progress-tracker.css'





const StudentProfileViewer = () => {
  const testScreenshotBtn = () => {
    console.log('Test screenshot button')
  }

  const navBtns = [
    { name: 'Take Screenshot', 
      action: testScreenshotBtn
    },
    { name: 'Help Center', action: '' },
    { name: 'More Projects', action: '' },
  ]

  const currentUser = {
    name: 'Jasmina Salvador',
    image: 'jasmina-salvador.png',
  }

  const profiles = {
    id: 'studentProfiles',
    component: StudentProfiles, // Remember to import this component at the top
    menuItem: 'Student Profiles',
    icon: 'student-profiles.png',
  }

  const tracker = {
    id: 'progressTracker',
    component: ProgressTracker,
    menuItem: 'Progress Tracker',
    icon: 'progress-tracker.png',
  }

  const HelpRequest = {
    id: 'HelpRequest',
    menuItem: 'Help Request',
    icon: 'help-requests.png',

  }

  const projectItems = [
    tracker,
    profiles,
    HelpRequest,
  ]

  return (
    <>
     <MainHeader layout='2' navBtns={navBtns} />
      <div className='profile-viewer-container'>
        <ProjectBuilder projectItems={projectItems} currentUser={currentUser} />
      </div>
    </>
  )
}


export default StudentProfileViewer

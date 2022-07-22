import MainHeader from '../header/MainHeader'
import Demonstration from './Demonstration'
import ProjectBuilder from '../project-builder/ProjectBuilder'

// Remember to create a route in App.js to connect to this page.
const DemonstrationBuilder = () => {
  // START Navbar props
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

  const projectBar = {
    name: 'Introduction',
    steps: 14
  }
  // END Navbar props

  // Need to pass currentUser object into ProjectBuilder because the SideBar requires the user image
  const currentUser = {
    name: 'Rawiri Fletcher',
    image: 'rawiri-fletcher.png'
  }

  // START Unique Project Builder items
  // Display a single page
  const demonstrationOne = {
    id: 'demonstrationOne',
    component: Demonstration, // Remember to import this component at the top
    isArrowNavEnabled: false, // You can remove this line altogether
    menuItem: 'Demonstration One',
    icon: 'new-project.png',
    contents: {
      heading: 'Heading',
      paragraph: 'This is a paragraph.'
    }
  }

  // Display multiple pages in an arrow navigation container
  const demonstrationTwo = { 
    id: 'demonstrationTwo',
    component: Demonstration,
    isArrowNavEnabled: true,
    menuItem: 'Demonstration Two',
    icon: 'new-project.png',
    contents: [  
      {
        id: 1, // Each page should have its own unique ID
        heading: 'Heading',
        paragraph: 'This is a paragraph.'
      },
      {
        id: 2,
        heading: 'Heading Two',
        paragraph: 'This is paragraph two.'
      },
      {
        id: 3,
        heading: 'Heading Three',
        paragraph: 'This is paragraph three.'
      },
    ]
  }
  // END Unique Project Builder items

  const projectItems = [
    { learningObjectives: 'insert' },
    { instructions: 'insert' },
    { videoTutorial: 'insert' },
    demonstrationOne,
    demonstrationTwo
  ]

  return (
    <>
      <MainHeader layout='2' projectBar={projectBar} navBtns={navBtns} />
      <ProjectBuilder projectItems={projectItems} currentUser={currentUser} />
    </>
  )
}

export default DemonstrationBuilder
import Intro from '../components/homepage/Intro'
import Offers from '../components/homepage/ProjectsAndSkills'
import ProgrammeBenefits from '../components/homepage/ProgrammeBenefits'
import Signup from '../components/homepage/Signup'
import MainHeader from '../components/header/MainHeader'
import MainFooter from '../components/MainFooter'

import '../styles/homepage.css'

const Homepage = () => {
  const navLinks = [
    { name: 'Home', route: '#' },
    { name: 'Features', route: '#' },
    { name: 'Teachers', route: '#' },
  ]

  const currentUser = {
    name: 'Rawiri Fletcher',
    image: 'rawiri-fletcher'
  }

  return (
    <>
      <MainHeader layout='1' navLinks={navLinks} currentUser={currentUser} />
      <div id='homepage-container'>
        <Intro />
        <Offers />
        <ProgrammeBenefits />
        <Signup />
      </div>
      <MainFooter />
    </>
  )
}

export default Homepage
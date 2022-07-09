import Intro from '../Components/homepage/Intro'
import Offers from '../Components/homepage/ProjectsAndSkills'
import ProgrammeBenefits from '../Components/homepage/ProgrammeBenefits'
import Signup from '../Components/homepage/Signup'
import MainHeader from '../Components/header/MainHeader'
import MainFooter from '../Components/MainFooter'

import '../Styles/homepage.css'

const Homepage = () => {
  const navLinks = [
    { name: 'Home', route: '#' },
    { name: 'Features', route: '#' },
    { name: 'Teachers', route: '#' },
  ]

  return (
    <>
      <MainHeader layout='1' navLinks={navLinks} />
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
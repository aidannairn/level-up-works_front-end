import Intro from './Intro'
import Offers from './ProjectsAndSkills'
import ProgrammeBenefits from './ProgrammeBenefits'
import Signup from './Signup'

import '../../styles/homepage.css'

const Homepage = () => {
  return (
    <div id='homepage-container'>
      <Intro />
      <Offers />
      <ProgrammeBenefits />
      <Signup />
    </div>
  )
}

export default Homepage
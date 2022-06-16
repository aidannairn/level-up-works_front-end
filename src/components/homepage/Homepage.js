import Intro from './Intro'
import Offers from './ProjectsAndSkills'
import ProgrammeBenefits from './ProgrammeBenefits'

import '../../styles/homepage.css'

const Homepage = () => {
  return (
    <div id='homepage-container'>
      <Intro />
      <Offers />
      <ProgrammeBenefits />
    </div>
  )
}

export default Homepage
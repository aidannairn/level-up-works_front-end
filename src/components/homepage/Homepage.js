import Intro from './Intro'
import Offers from './ProjectsAndSkills'

import '../../styles/homepage.css'

const Homepage = () => {
  return (
    <div id='homepage-container'>
      <Intro />
      <Offers />
    </div>
  )
}

export default Homepage
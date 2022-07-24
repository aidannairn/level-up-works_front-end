import { useState } from 'react'

import Intro from '../components/homepage/Intro'
import Offers from '../components/homepage/ProjectsAndSkills'
import ProgrammeBenefits from '../components/homepage/ProgrammeBenefits'
import Signup from '../components/homepage/Signup'
import MainHeader from '../components/header/MainHeader'
import MainFooter from '../components/MainFooter'
import AuthModal from "../components/auth-modal/AuthModal";

import '../styles/homepage.css'

const Homepage = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)

  const navLinks = [
    { name: 'Home', route: '/' },
    { name: 'Features', route: '#' },
    { name: 'Teachers', route: '#' },
  ]

  return (
    <>
      {isModalVisible && <AuthModal setIsModalVisible={setIsModalVisible} />}
      <MainHeader layout='1' navLinks={navLinks} setIsModalVisible={setIsModalVisible} />
      <div id='homepage-container'>
        <Intro setIsModalVisible={setIsModalVisible}/>
        <Offers />
        <ProgrammeBenefits />
        <Signup setIsModalVisible={setIsModalVisible}/>
      </div>
      <MainFooter />
    </>
  )
}

export default Homepage;
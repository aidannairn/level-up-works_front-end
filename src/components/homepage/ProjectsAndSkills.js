import { useState, useEffect } from 'react'

const Project = ({ title, image, handleGalleryBtnClick }) => {
  return (
    <div className="hmpg-project-container" onClick={handleGalleryBtnClick}>
      <img src={`images/homepage/projects/${image}.png`} />
      <h4>{title}</h4>
    </div>
  )
}

const Skill = ({ bgImage }) => {
  return (
    <img className='hmpg-skill-img' src={`images/homepage/skills/${bgImage}.png`} />
  )
}

const ProjectsAndSkills = () => {
  const [galleryImg, setGalleryImg] = useState('images/homepage/laptop-gallery/laptop-1.png')
  const [activeGalleryBtn, setActiveGalleryBtn] = useState('1')

  const handleGalleryInputChange = (e) => {
    setGalleryImg(`images/homepage/laptop-gallery/${e.target.value}.png`)
  }

  const projects = [
    { heading: 'Animation', img: 'frame' },
    { heading: 'Games', img: 'joystick' },
    { heading: 'Chatbots', img: 'robotic' },
    { heading: 'Augmented Reality', img: 'augmented-reality' }
  ]

  const skills = [
    { image: 'creativity' },
    { image: 'critical-thinking' },
    { image: 'communication' },
    { image: 'technology' }
  ]

  const handleGalleryBtnClick = (activeBtn) => {
    setActiveGalleryBtn(activeBtn)
    setGalleryImg(`images/homepage/laptop-gallery/laptop-${activeBtn}.png`)
  }

  
  return (
    <div id="hmpg-pas-container">
      <div id="hmpg-projects-and-gallery">
        <div id="hmpg-intro-and-projects">
          <div>
            <h2>What we offer</h2>
            <p>The Creative Problem Solving programme is series of digital creation projects aimed to encourage self-motivation and student agency, designed by New Zealand's leading IT industry experts and schools.</p>
          </div>
          <div id="hmpg-projects-container">
            <h3>What will students create?</h3>
            <div id="hmpg-projects">
              {projects.map((project, index) => {
              return <Project key={index} title={project.heading} handleGalleryBtnClick={() => handleGalleryBtnClick(index + 1)} image={project.img} />
              })}
            </div>
          </div>
        </div>
        <div id="hmpg-pas-gallery-container">
          <img src={galleryImg} alt="" />
          <div id="hmpg-gallery-btns">
            <div 
              className={`hmpg-gallery-btn ${activeGalleryBtn == '1' ? 'active' : ''}`} 
              onClick={() => handleGalleryBtnClick('1')}>
            </div>
            <div 
              className={`hmpg-gallery-btn ${activeGalleryBtn == '2' ? 'active' : ''}`} 
              onClick={() => handleGalleryBtnClick('2')}>
            </div>
            <div 
              className={`hmpg-gallery-btn ${activeGalleryBtn == '3' ? 'active' : ''}`} 
              onClick={() => handleGalleryBtnClick('3')}>
            </div>
            <div 
              className={`hmpg-gallery-btn ${activeGalleryBtn == '4' ? 'active' : ''}`} 
              onClick={() => handleGalleryBtnClick('4')}>
            </div>
          </div>
        </div>
      </div>
      <div id="hmpg-skills-container">
      <h3>Teaching kids programming and digital skills is MORE than just writing code.</h3>
      <div id="hmpg-skills">
        {skills.map((skill, index) => {
          return <Skill key={index} bgImage={skill.image} />
        })}
      </div>
      </div>
    </div>
  )
}

export default ProjectsAndSkills
import '../../Styles/project-builder/submit-project.css'

const StudentActionsContainer = ({ content }) => {
  const {
    heading,
    paragraph,
    image,
    btnIcon,
    btnText
  } = content

  return (
    <div className="pb-sp-user-view-container">
      <img className='pb-sp-view-img' src={`images/student-builder/${image}`} alt="" />
      <h2>{heading}</h2>
      <p>{paragraph}</p>
      <div className="pb-sp-view-btn-container">
        <div className='pb-sp-view-btn'>
          <img src={`images/student-builder/submit-project/${btnIcon}`} alt="" />
          <h4>{btnText}</h4>
        </div>
      </div>
    </div>
  )
}

const SubmitProject = ({ content }) => {
  return (
    <div id="pb-submit-project-container">
      <StudentActionsContainer key={content.sendPhoto.id} content={content.sendPhoto} />
      <StudentActionsContainer key={content.callTeacher.id} content={content.callTeacher} />
    </div>
  )
}

export default SubmitProject
import '../../styles/project-builder/learning-objectives.css'

const LearningObjectives = ({ content }) => {
  const { text, image } = content
  console.log(content)
  return (
    <div id='pb-learning-objectives-container'>
      <h1>Learning Objectives</h1>
      <div id="lo-img-wrapper">
        <img src={`https://cdn.filestackcontent.com/${image}`} alt="Learning Objectives image" />
      </div>
      <h2>{text}</h2>
    </div>
  )
}

export default LearningObjectives
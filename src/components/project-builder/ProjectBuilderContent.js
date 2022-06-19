import LearningObjectives from "../student-builder/LearningObjectives"

import '../../styles/project-builder/learning-objectives.css'

const ProjectBuilderContent = ({ id, content }) => {
  return (
    <div id="pb-main-container">
      <div id="pb-main-content">
        {
          id === 'learningObjectives' &&
          <LearningObjectives content={content} />
        }
      </div>
    </div>
  )
}

export default ProjectBuilderContent
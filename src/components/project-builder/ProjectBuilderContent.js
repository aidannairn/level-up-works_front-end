import LearningObjectives from '../student-builder/LearningObjectives'
import ArrowWrapContainer from './ArrowWrapContainer'

import '../../styles/project-builder/learning-objectives.css'

const ProjectBuilderContent = ({ id, content }) => {

  return (
    <div id="pb-main-container">
      <div id="pb-main-content">
        {
          id === 'learningObjectives' &&
          <LearningObjectives content={content} />
        }
        {
          id === 'videoTutorial' &&
          <ArrowWrapContainer type={content.type} contents={content.youtubeSources} />
        }
      </div>
    </div>
  )
}

export default ProjectBuilderContent
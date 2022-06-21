import LearningObjectives from '../student-builder/LearningObjectives'
import ArrowWrapContainer from './ArrowWrapContainer'

import '../../styles/project-builder/learning-objectives.css'

const ProjectBuilderContent = ({ id, contents }) => {

  return (
    <div id="pb-main-container">
      <div id="pb-main-content">
        {
          id === 'learningObjectives' &&
          <LearningObjectives content={contents} />
        }
        {
          id === 'videoTutorial' &&
          <ArrowWrapContainer type={contents[0].type} contents={contents[0].youtubeSources} />
        }
        {
          id === 'instructions' &&
          <ArrowWrapContainer type={contents[0].type} contents={contents[0].pages} />
        }
      </div>
    </div>
  )
}

export default ProjectBuilderContent
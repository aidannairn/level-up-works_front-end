import ArrowWrapContainer from './ArrowWrapContainer'
import '../../styles/project-builder/learning-objectives.css'

const ProjectBuilderContent = ({ projectItem }) => {
  const {
    id,
    component,
    isArrowNavEnabled,
    contents
  } = projectItem

  const ProjectItem = component

  return (
    <div id="pb-main-container">
      <div id="pb-main-content">
        { 
          isArrowNavEnabled
          ? <ArrowWrapContainer key={id} component={component} contents={contents} />
          : <ProjectItem key={id} content={contents} />
        }
      </div>
    </div>
  )
}

export default ProjectBuilderContent
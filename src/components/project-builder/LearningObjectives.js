import '../../styles/project-builder/learning-objectives.css'

const LearningObjectives = ({ content }) => {
  const { heading, htmlStr } = content

  const html = htmlStr.replace('src="', 'src="https://cdn.filestackcontent.com/')

  return (
    <div id='pb-learning-objectives-container' className='scrollable'>
      <h1>{heading}</h1>
      <div dangerouslySetInnerHTML={{__html: `${html}`}} />
    </div>
  )
}

export default LearningObjectives
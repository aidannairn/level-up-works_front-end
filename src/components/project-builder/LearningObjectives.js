const BlockContainer = ({ block }) => {
  const { type, mainBlock, blockComponents } = block

  return (
    <div className="pb-lo-block-container">
      <h2>{type} Blocks</h2>
      <div className="pb-lo-blocks">
        <img src={`images/student-builder/learning-objectives/${mainBlock}`} alt="Main block" />
        <div className="pb-lo-block-components">
          {blockComponents.map((blkComp, index) => {
            return (
              <img key={index} className="pb-lo-blk-img" src={`images/student-builder/learning-objectives/${blkComp}`}  />            
            )
          })}
        </div>
      </div>
    </div>
  )
}

const LearningObjectives = ({ content }) => {
  const { heading, desc, blocks } = content

  return (
    <div id="pb-learning-objectives-container">
      <div id="pb-lo-header">
        <h1>{heading}</h1>
        <h3>{desc}</h3>
      </div>
      <div id="pb-lo-blocks-container">
        {blocks.map((block, index) => {
          return <BlockContainer key={index} block={block} />
        })}
      </div>
    </div>
  )
}

export default LearningObjectives
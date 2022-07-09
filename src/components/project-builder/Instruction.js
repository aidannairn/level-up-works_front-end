import '../../styles/project-builder/instructions.css'

const InstructionStep = ({ stepNum, element }) => {
  const { type, content } = element

  switch (type) {
    case 'heading':
      return <h1 className="pb-aw-instr-heading">{stepNum}. {content}</h1>
    case 'paragraph':
      return <p className={`${content.length < 100 ? 'pb-center-paragraph' : ''}`}>{content}</p>
    case 'paragraphWithLink':
      const {
        textBefore,
        textAfter,
        href,
        text,
        linkColor
      } = content

      return <p className={`pb-aw-instr-p-with-link ${(textBefore + text + textAfter).length < 100 ? 'pb-center-paragraph' : ''}`}>{textBefore} <a href={href} target='_blank' style={{color: `${linkColor}`}}>{text}</a>{textAfter}</p>
    case 'image':
      return <div className='pb-aw-img-container'>
        <img className='pb-aw-instr-img' src={`https://cdn.filestackcontent.com/${content}`} />
      </div>
    case 'orderedList':
      return <ol>
        {content.map((item) => <li>{item}</li>)}
      </ol>
    default:
      break;
  }
}

const Instruction = ({ content, index: stepNum }) => (
  <div id='pb-aw-instruction-container' className='scrollable'>
    {content.elements.map((el, index) => {
      return <InstructionStep key={index} stepNum={stepNum + 1} element={el} />
    })}
  </div>
)


export default Instruction
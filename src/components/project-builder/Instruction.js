const InstructionStep = ({ stepNum, element }) => {
  const { type, content } = element

  let instructionStep

  switch (type) {
    case 'heading':
      instructionStep = <h1 className="pb-aw-instr-heading">{stepNum}. {content}</h1>
      break
    case 'paragraph':
      instructionStep = <p>{content}</p>
      break
    case 'paragraphWithLink':
      const {
        textBefore,
        textAfter,
        href,
        text,
        linkColor
      } = content

      instructionStep = <p className='pb-aw-instr-p-with-link'>{textBefore} <a href={href} target='_blank' style={{color: `${linkColor}`}}>{text}</a>{textAfter}</p>
      break
    case 'image':
      instructionStep = <img className='pb-aw-instr-img' src={`images/student-builder/${content}`} />
      break
    default:
      break;
  }
  
  return <div>{instructionStep}</div>

}

const Instruction = ({ content, index: stepNum }) => (
  <div id='pb-aw-instruction-container'>
    {content.elements.map((el, index) => {
      return <InstructionStep key={index} stepNum={stepNum + 1} element={el} />
    })}
  </div>
)


export default Instruction
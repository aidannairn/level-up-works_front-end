import { useEffect, useState } from 'react'

import Instructions from './Instruction'
import Video from './Video'
import MakeProject from './MakeProject'
import '../../styles/project-builder/arrow-wrap-container.css'

const Content = ({ index, content, type }) => {
  switch (type) {
    case 'videos':
      return <Video video={content.youtubeID} />
    case 'instructionsPage':
      return <Instructions stepNum={index + 1}elements={content.elements} />
    case 'images':
      return <MakeProject image={content.src} />
    default:
      break;
  }
}

const ArrowWrapContainer = ({ type, contents }) => {
  const [content, setContent] = useState(contents[0])
  const [currentContentIndex, setCurrentContentIndex] = useState(0)

  // let currentContentIndex = 0
  
  useEffect(() => {
    const newIndex = contents.findIndex(c => {
      return c.id === content.id
    })
    setCurrentContentIndex(newIndex)
  }, [content])

  const includesAdditionalContent = contents.length > 1

  const handleContentChange = action => {
    if (action === 'prev') {
      currentContentIndex === 0
        ? setContent(contents[contents.length - 1])
        : setContent(contents[currentContentIndex - 1])
    } else if (action === 'next') {
      currentContentIndex === contents.length - 1
        ? setContent(contents[0])
        : setContent(contents[currentContentIndex + 1])
    }
  }

  return (
    <div id="pb-arrow-wrap-container">
      <div id="pb-arw-wrap-main">
        {includesAdditionalContent 
          ? <div id='pb-arw-wrap-outer'>
              <div className="pb-arw-wrap-nav-btn prev" onClick={() => handleContentChange('prev')}>
                <div className='pb-arw-wrap-nav-arrow prev'></div>
              </div>
              <Content type={type} content={content} index={currentContentIndex} />
              <div className="pb-arw-wrap-nav-btn next" onClick={() => handleContentChange('next')}>
                <div className='pb-arw-wrap-nav-arrow next'></div>
              </div>
          </div>
          : <Content type={type} content={content} index={currentContentIndex} />
        }
      </div>
      {includesAdditionalContent 
        && <div id="pb-arw-wrap-dot-container">
          {contents.map((c, index) => {
            return (
              <div key={index} className={`pb-arw-wrap-dot ${content.id === c.id && 'active'}`}></div>
           )
          })}
        </div>
      }
    </div>
  )
}

export default ArrowWrapContainer
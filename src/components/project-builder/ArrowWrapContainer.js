import { useEffect, useState } from 'react'

import Video from './Video'
import '../../styles/project-builder/arrow-wrap-container.css'

const Content = ({ content, type }) => {
  switch (type) {
    case 'videos':
      return <Video video={content.youtubeID} />
      break;
  
    default:
      break;
  }
}


const ArrowWrapContainer = ({ type, contents }) => {
  const [content, setContent] = useState(contents[0])
  
  let currentContentIndex
  
  useEffect(() => {
    currentContentIndex = contents.findIndex(c => {
      return c.id === content.id
    })
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
              <Content type={type} content={content} />
              <div className="pb-arw-wrap-nav-btn next" onClick={() => handleContentChange('next')}>
                <div className='pb-arw-wrap-nav-arrow next'></div>
              </div>
          </div>
          : <Content type={type} content={content} />
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
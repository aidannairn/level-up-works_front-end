import { useEffect, useState } from 'react'

import '../../styles/project-builder/video-tutorial.css'

const Video = ({ video }) => {
  return (
    <div id="pb-vt-vid-wrapper">
      <iframe src={`https://www.youtube-nocookie.com/embed/${video}/`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  )
}

const VideoTutorial = ({ videos }) => {
  const [video, setVideo] = useState(videos[0])

  let currentVidIndex

  useEffect(() => {
    currentVidIndex = videos.findIndex(vid => {
      return vid.id === video.id
    })
  }, [video])

  const includesMultipleVids = videos.length > 1

  const handleVideoChange = action => {
    if (action === 'prev') {
      currentVidIndex === 0
        ? setVideo(videos[videos.length - 1])
        : setVideo(videos[currentVidIndex - 1])
    } else if (action === 'next') {
      currentVidIndex === videos.length - 1
        ? setVideo(videos[0])
        : setVideo(videos[currentVidIndex + 1])
    }
  }

  return (
    <div id="pb-video-tutorial-container">
      <div id="pb-vt-main">
        {includesMultipleVids 
          ? <div id='pb-vt-outer'>
            <div className="pb-vt-nav-btn prev" onClick={() => handleVideoChange('prev')}><div className='pb-vt-nav-arrow prev'></div></div>
            <Video video={video.youtubeID} />
            <div className="pb-vt-nav-btn next" onClick={() => handleVideoChange('next')}><div className='pb-vt-nav-arrow next'></div></div>
          </div>
          : <Video video={video.youtubeID} />
        }
      </div>
      {includesMultipleVids 
        && <div id="pb-vt-vid-dot-container">
          {videos.map((vid, index) => {
            return (
              <div key={index} className={`pb-lo-vid-dot ${video.id === vid.id && 'active'}`}></div>
           )
          })}
        </div>
      }
    </div>
  )
}

export default VideoTutorial
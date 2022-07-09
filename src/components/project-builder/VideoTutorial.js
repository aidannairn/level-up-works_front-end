const VideoTutorial = ({ content }) => (
  <div id="pb-arw-wrap-vid-wrapper">
    <iframe src={`https://www.youtube-nocookie.com/embed/${content.youtubeID}/`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </div>
)

export default VideoTutorial
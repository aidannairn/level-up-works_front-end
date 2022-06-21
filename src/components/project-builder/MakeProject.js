const MakeProject = ({ image }) => {
  console.log(image)
  return (
    <div id='pb-aw-make-project-wrapper' >
      <img id='pb-aw-mp-img' src={`images/student-builder/${image}`} />
    </div>
  )
}

export default MakeProject
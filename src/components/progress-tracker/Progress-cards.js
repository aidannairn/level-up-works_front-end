import Card from './Card'




function ProgressCards({ studentData }) {
  //checking if project it completed or not to be coloured in.
  const projectsCompletedArray = studentData.projects.filter((project) => 
    project.dateCompleted !== '1899-11-29T12:30:00.000Z'
  )

    return (
<div className='studentBars'>
  <Card>
    <div className='barContainer'>
      <div className='studentData'>
        <h3>{studentData.firstName} {studentData.lastName}</h3>
        <br/><p>{projectsCompletedArray.length}/15 Projects completed</p>
          </div>
            {studentData.projects.map((project, index) => {
            console.log(studentData.firstName, project.dateCompleted)
            return(
              <div className='progress'>
                <div className='progressCircles' style={{ 
                  //checking to see if project is complete, to colour in
                 backgroundColor: project.dateCompleted > '1899-11-29T12:30:00.000Z' 
                 ? '#99EDCC' 
                 : '#fff'}}>
                <h2>{project.projectID}</h2>
                </div>
              </div>
           )
          
       })}
    </div>
  </Card>
</div>
      )
}


export default ProgressCards

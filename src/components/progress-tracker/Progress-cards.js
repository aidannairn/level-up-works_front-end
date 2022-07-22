import ProgressButtons from './ProgressButtons'
import Card from './Card'



function ProgressCards({ studentData, progressData }) {



    return (
<div className='studentBars'>
  <Card>
    <div className='barContainer'>
      <div className='studentData'>
        <h4>{studentData.FirstName} {studentData.LastName}</h4>
        <br/><p>{studentData.ProjectsCompleted}/15 Projects completed</p>
      </div>
      <div className='progress'>
        <h2 style={{ 
        backgroundColor: studentData.DateCompleted > '0' 
        ? '#99EDCC' 
        : '#fff'}}>
        {studentData.ProjectID}
        </h2>
      </div>
    </div>
  </Card>
</div>
      )
}


export default ProgressCards

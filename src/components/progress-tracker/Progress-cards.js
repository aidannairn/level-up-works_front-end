
import Card from './Card'

function ProgressCards({ studentData }) {
  
    return (
<div className='studentBars'>
  <Card>
    <div className='barContainer'>
      <div className='studentData'>{studentData.map((studentData, index) => {
        return <h4 studentData={studentData} key={index}>{studentData.name}</h4>
      })}
       <br/><p>4/15 projects completed</p></div>


        <ul className='progress' >
         {Array.from({ length: 15 }, (_, i) => (
          <li key={`progress-${i + 1}`}>
            <input
              type='checkbox'
              id={`num${i + 1}`}
              name='progress'
              value={i + 1}
            />
            <label htmlFor={`num${i + 1}`}>{i + 1}</label>
           </li>
          ))}
        </ul>
      </div>
   </Card>
</div>
      )
  
}


export default ProgressCards


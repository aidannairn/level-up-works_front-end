import Card from "../progress-tracker/Card";



function StudentCards({ studentData }) {

  return (
    <div className="StudentContainer">
        <div className="studentCards">
            <div className="profiles">
              <figure>
                <img src={`https://cdn.filestackcontent.com/${studentData.ProfilePic}`} alt='student img'/>
                <figcaption>{studentData.FirstName}  {studentData.LastName}</figcaption>
              </figure>
            </div>
        </div>
   </div>
  )
}

export default StudentCards

import '../../Styles/StudentProjectsPage/ProjectSideBar.css'

const Sidebar = () => {
  return (
    <div className="projectSideBar">
        <div id='Subscription'>
            <h5>SUBSCRIPTION</h5>
            <input type='checkbox' name='free' value='free'></input>
            <label for='free'>Free</label>
            <br></br>
            <input type='checkbox' name='premium' value='premium'></input>
            <label for='premium'>Premium</label>
        </div>
        <br></br>
        <div id='Activity'>
            <h5>ACTIVITY TYPE</h5>
            <input type='checkbox' name='animation' value='animation'></input>
            <label for='animation'>Animation</label>
            <br></br>
            <input type='checkbox' name='game' value='game'></input>
            <label for='game'>Game</label>
            <br></br>
            <input type='checkbox' name='chatbot' value='chatbot'></input>
            <label for='chatbot'>Chatbot</label>
            <br></br>
            <input type='checkbox' name='augmented reality' value='augmented reality'></input>
            <label for='augmented reality'>Augmented Reality</label>
            <br></br>
        </div>
        <br></br>
        <div id='Year'>
            <h5>YEAR LEVEL</h5>
            <input type='checkbox' name='1 - 4' value='1 - 4'></input>
            <label for='1 - 4'>1 - 4</label>
            <br></br>
            <input type='checkbox' name='5 - 6' value='5 - 6'></input>
            <label for='5 - 6'>5 - 6</label>
            <br></br>
            <input type='checkbox' name='7 - 8' value='7 - 8'></input>
            <label for='7 - 8'>7 - 8</label>
            <br></br>
            <input type='checkbox' name='9 - 13' value='9 - 13'></input>
            <label for='9 - 13'>9 - 13</label>
            <br></br>
        </div>
        <br></br>
        <div id='Subject'>
            <h5>SUBJECT MATTER</h5>
            <input type='checkbox' name='computer science' value='computer science'></input>
            <label for='computer science'>Computer Science</label>
            <br></br>
            <input type='checkbox' name='maths' value='maths'></input>
            <label for='maths'>Maths</label>
            <br></br>
            <input type='checkbox' name='science' value='science'></input>
            <label for='science'>Science</label>
            <br></br>
            <input type='checkbox' name='art' value='art'></input>
            <label for='art'>Art</label>
            <br></br>
            <input type='checkbox' name='music' value='music'></input>
            <label for='music'>Music</label>
        </div>
    </div>
  )
}

export default Sidebar

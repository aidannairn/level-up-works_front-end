
import ProjectHeading from './Components/ProjectsPage/ProjectsHeading'
import ProjectNav from './Components/ProjectsPage/ProjectsNav'
import Projects from './Components/ProjectsPage/Projects'
//import Header from './Components/MainHeader'
import Sidebar from './Components/ProjectsPage/Sidebar'
import Footer from './Components/MainFooter'
import Homepage from "./pages/Homepage";
import StudentBuilder from './pages/StudentBuilder'
import StudentProfileViewer from './pages/StudentProfileViewer'

import { BrowserRouter, Routes, Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/student-project-builder' element={<StudentBuilder />} />
          <Route path='/student-profile-viewer' element={<StudentProfileViewer />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
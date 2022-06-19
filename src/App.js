<<<<<<< HEAD
import { BrowserRouter, Routes, Route,
} from "react-router-dom";

import Homepage from "./pages/Homepage";
import StudentBuilder from './pages/StudentBuilder'
=======
 import Header from "./components/MainHeader";
 import Homepage from "./components/homepage/Homepage";
 import Footer from "./components/MainFooter";
import TeacherNavBar from "./components/studentProfiles/teacherNavBar";
>>>>>>> louis

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/student-project-builder' element={<StudentBuilder />} />
        </Routes>
      </BrowserRouter>
=======
      <TeacherNavBar/>
>>>>>>> louis
    </div>
  );
}

export default App;

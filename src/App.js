import { BrowserRouter, Routes, Route,
} from "react-router-dom";

import Homepage from "./pages/Homepage";
import StudentBuilder from './pages/StudentBuilder'
import AuthModal from "./components/auth-modal/AuthModal";

function App() {
  return (
    <div className="App">
      <AuthModal />
      {/* <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/student-project-builder' element={<StudentBuilder />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
}

export default App;

import { BrowserRouter, Routes, Route
} from "react-router-dom";

import Homepage from "./pages/Homepage";
import StudentBuilder from './pages/StudentBuilder'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Homepage />} />
          <Route path='/student-project-builder' element={<StudentBuilder />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

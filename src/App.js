import { BrowserRouter, Routes, Route
} from "react-router-dom";
import { UserProvider } from "./contexts/UserContext";

import Homepage from "./pages/Homepage";
import StudentBuilder from './pages/StudentBuilder'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UserProvider>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/student-project-builder' element={<StudentBuilder />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;

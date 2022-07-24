import { BrowserRouter, Routes, Route } from "react-router-dom";

import { UserProvider } from "./contexts/UserContext";
import ProjectSubmission from "./pages/ProjectSubmission";
import ProjectLibraryTeacher from "./pages/projectLibraryTeacher";
import Homepage from "../src/pages/Homepage";
import StudentBuilder from "./pages/StudentBuilder";
import TeacherProfileViewer from "./pages/TeacherProfileViewer";
import StudentProfileViewer from "./pages/StudentProfileViewer";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <UserProvider>
                    <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route
                            path="/student-project-builder"
                            element={<StudentBuilder />}
                        />
                        <Route
                            path="/project-submission"
                            element={<ProjectSubmission />}
                        />
                        <Route
                            path="project-library"
                            element={<ProjectLibraryTeacher />}
                        />
                        <Route
                            path="teacher-profile"
                            element={<TeacherProfileViewer />}
                        />
                        <Route
                            path="/student-profile-viewer"
                            element={<StudentProfileViewer />}
                        />
                    </Routes>
                </UserProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;

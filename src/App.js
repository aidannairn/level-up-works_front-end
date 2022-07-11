import React from "react";
import ProjectSubmission from "./pages/ProjectSubmission";
import ProjectLibraryTeacher from "./components/project-library-v/projectLibraryTeacher";
import Homepage from "../src/pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import StudentBuilder from "./pages/StudentBuilder";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
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
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;

import Header from "./Components/Header";
import ProjectHeading from './Components/ProjectsPage/ProjectsHeading'
import ProjectNav from './Components/ProjectsPage/ProjectsNav'
//import Homepage from "./components/homepage/Homepage";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <ProjectHeading/>
      <ProjectNav/>
      <Footer />
    </div>
  );
}

export default App;
import ProjectHeading from './Components/ProjectsPage/ProjectsHeading'
import ProjectNav from './Components/ProjectsPage/ProjectsNav'
import Projects from './Components/ProjectsPage/Projects'
//import Homepage from "./components/homepage/Homepage";
import Header from './Components/MainHeader'
import Sidebar from './Components/ProjectsPage/Sidebar'
// import Homepage from "./components/homepage/Homepage";
import Footer from './Components/MainFooter'


function App() {
  return (
    <div className="App">
      <Header />
      <ProjectHeading/>
      <ProjectNav/>
      <Sidebar/>
      <Projects/>
      <Footer />
    </div>
  );
}

export default App;
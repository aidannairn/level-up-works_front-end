import Header from "./components/Header";
import Homepage from "./components/homepage/Homepage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main> {/* Add components within main */}
        {/* <Homepage /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;

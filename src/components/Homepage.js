import '../styles/homepage.css'

const Homepage = () => {
  return (
    <div id='homepage-container'>
      <div id="hmpg-intro">
        <div id="hmpg-intro-content">
          <h1>Prepare young minds for a better <span>future.</span></h1>
          <p>Let us help you advance students in Digital Technologies and other learning areas with our project-based learning programme.</p>
          <div id="hmpg-btn-container">
            <button className="hmpg-standard-btn">LEARN MORE</button>
            <div id="hmpg-signup-btn-container">
              <button className="signup-btn">SIGN UP</button>
              <p>*Basic subscription includes the first 15 projects free of charge.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
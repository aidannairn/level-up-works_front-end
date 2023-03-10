const Intro = ({ setIsModalVisible }) => {
  return (
    <div id="hmpg-intro-container">
      <div id="hmpg-intro-content">
        <h1>Prepare young minds for a better <span>future.</span></h1>
        <p>Let us help you advance students in Digital Technologies and other learning areas with our project-based learning programme.</p>
        <div id="hmpg-btn-container">
          <button className="hmpg-standard-btn">LEARN MORE</button>
          <div id="hmpg-signup-btn-container">
            <button className="signup-btn" onClick={() => setIsModalVisible(true)}>SIGN UP</button>
            <p>*Basic subscription includes the first 15 projects free of charge.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
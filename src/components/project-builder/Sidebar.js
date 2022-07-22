import { useState } from "react"

const UserOption = ({ icon, heading, sidebarExpanded }) => {
  return (
    <div className="sb-user-option">
      <i className={icon}></i>
      {sidebarExpanded && <h5>{heading}</h5>}
    </div>
  )
}

const SidebarView = props => {
  const {
    projectItem,
    currentMenuItem,
    setCurrentMenuItem,
    sidebarExpanded
  } = props
  const { menuItem, icon, id } = projectItem
  return (
    <div 
      className={`sb-view ${id === currentMenuItem ? 'sb-active-view' : ''}`}
      onClick={() => setCurrentMenuItem(projectItem)}
    >
      <img src={`/images/sidebar/${icon}`} className="sb-view-img" />
      {sidebarExpanded && <h4 className="sb-view-title">{menuItem}</h4>}
    </div>
  )
}

const Sidebar = props => {
  const [sidebarExpanded, setSidebarExpanded] = useState(false)
  const { userImg, projectItems, currentMenuItem, setCurrentMenuItem } = props

  const handleSidebarState = () => {
    setSidebarExpanded(!sidebarExpanded)
  }

  return (
    <div id="pb-sidebar" className={`${sidebarExpanded ? '' : 'pb-sb-hidden'}`}>
      <div id="sb-profile-img-wrapper">
        <img src={`/images/students/${userImg}`} alt="Profile image" />
      </div>
      <div id="sb-views">
        {projectItems.map((projectItem, index) => {
          const { content, contents } = projectItem
          const includesContents = contents && contents.length
          if (content || includesContents) {
            return <SidebarView key={index}
              projectItem={projectItem}
              currentMenuItem={currentMenuItem}
              setCurrentMenuItem={setCurrentMenuItem} 
              sidebarExpanded={sidebarExpanded}
            />
          }
        })}
      </div>
      <div id="sb-arrow-container">
        <div id="sb-arrow-outer" onClick={handleSidebarState}>
          <div id="sb-arrow"></div>
        </div>
      </div>
      <div id="sb-user-options">
        <UserOption icon='fa fa-user-circle' heading='Profile' sidebarExpanded={sidebarExpanded} />
        <UserOption icon='fa fa-cog' heading='Settings' sidebarExpanded={sidebarExpanded} />
        <UserOption icon='fa fa-sign-out' heading='Log out' sidebarExpanded={sidebarExpanded} />
      </div>
    </div>
  )
}

export default Sidebar
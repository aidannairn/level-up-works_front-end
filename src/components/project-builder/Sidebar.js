import { useState, useContext } from "react"

import { UserContext } from "../../contexts/UserContext"

const UserOption = ({ icon, heading, sidebarExpanded, action }) => {
  return (
    <div className="sb-user-option" onClick={action}>
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
  const user = useContext(UserContext)
  const [sidebarExpanded, setSidebarExpanded] = useState(false)
  const { projectItems, currentMenuItem, setCurrentMenuItem } = props

  const handleSidebarState = () => {
    setSidebarExpanded(!sidebarExpanded)
  }

  return (
    <div id="pb-sidebar" className={`${sidebarExpanded ? '' : 'pb-sb-hidden'}`}>
      <div id="sb-profile-img-wrapper">
        <img src={`https://cdn.filestackcontent.com/${user.profilePic}`} alt="Profile image." />

      </div>
      <div id="sb-views">
        {projectItems.map((projectItem, index) => {
          const { content, contents } = projectItem
          const includesContents = contents && contents.length

          let contentType
          const projectItemKeys = Object.keys(projectItem)
          if (projectItemKeys.includes('content')) contentType = 'content'
          if (projectItemKeys.includes('contents')) contentType = 'contents'

          if (((!content && content !== null) && (!contents && contents !== null)) || (content || includesContents)) {
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
        <UserOption icon='fa fa-sign-out' heading='Log out' action={user.handleUserLogout} sidebarExpanded={sidebarExpanded} />
      </div>
    </div>
  )
}

export default Sidebar
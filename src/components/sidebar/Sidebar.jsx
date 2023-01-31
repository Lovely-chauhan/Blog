import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem"> 
      <span className="sidebarTitle"> About Me </span>
      <p> If the lorem() generator is not working on your copy of Word, you probably have turned off the “Replace text as you type” option available under AutoCorrect.
      </p>
      </div>
      <div className="sidebarItem">
       <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarItems">Music</li>
          <li className="sidebarItems">Music</li>
          <li className="sidebarItems">Music</li>
          <li className="sidebarItems">Music</li>
          
          
        </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">Follow Us</span>
        <div className="sidebarSocial">
        <i className=" sidebarIcon fa-brands fa-facebook"></i>
      <i className=" sidebarIcon fa-brands fa-square-twitter"></i>
      <i className=" sidebarIcon fa-brands fa-square-instagram"></i>
        </div>
      </div>
    </div>
  )
}

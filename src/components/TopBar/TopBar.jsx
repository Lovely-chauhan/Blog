import "./topbar.css"
import { Link } from "react-router-dom"
export default function Topbar() {
  return (
    <div className='top'>
      
      <div className="topleft">
      <i className=" topIcon fa-brands fa-facebook"></i>
      <i className=" topIcon fa-brands fa-square-twitter"></i>
      <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topcentre">
      <ul className="toplist">
          <li className="listItems">Home</li>
          <li className="listItems">About</li>
          <li className="listItems">Contact</li>
          <li className="listItems">Write</li>
          <li className="listItems">LogOut</li>
          </ul>
      </div>
      <div className="topright">
      <i className="searchIcon fa-solid fa-magnifying-glass"></i>
      </div>
      
    </div>
  )
}

import React, { useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import { useTheme } from './Themecontext';
const NavBar = () => {
  const { mode, toggleMode } = useTheme(); // Use useTheme hook to get mode and toggleMode
  let location = useLocation();
  useEffect(() => {
  }, [location]);
  document.body.style.backgroundColor = mode === 'dark' ? 'rgb(27 28 29)' : 'white';
  document.body.style.color = mode === 'dark' ? 'white' : 'black';
  return (
    <div><nav className={`navbar fixed-top navbar-expand-lg ${mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`} >
      <div className="container-fluid">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent"><Link className="navbar-brand " to="/"><b>India Air News</b></Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            </li>
            <li className="nav-item"><Link className={`nav-link ${location.pathname === "/business" ? "active" : ""}`} to="/business">Business</Link></li>
            <li className="nav-item"><Link className={`nav-link ${location.pathname === "/entertainment" ? "active" : ""}`} to="/entertainment">Entertainment</Link></li>
            <li className="nav-item"><Link className={`nav-link ${location.pathname === "health" ? "active" : ""}`} to="/health">Health</Link></li>
            <li className="nav-item"><Link className={`nav-link ${location.pathname === "/science" ? "active" : ""}`} to="/science">Science</Link></li>
            <li className="nav-item"><Link className={`nav-link ${location.pathname === "/sports" ? "active" : ""}`} to="/sports">Sports</Link></li>
            <li className="nav-item"><Link className={`nav-link ${location.pathname === "/technology" ? "active" : ""}`} to="/technology">Technology</Link></li>
          </ul>
        </div>
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="darkModeSwitch"
            checked={mode === 'dark'}
            onChange={toggleMode}
          />
          <label className="form-check-label" htmlFor="darkModeSwitch">
            {mode === 'dark' ? 'Dark Mode' : 'Light Mode'}
          </label>
        </div>
      </div>
    </nav>
    </div>
  )
}
export default NavBar

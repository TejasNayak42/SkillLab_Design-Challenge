import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '../CSS/NavBar.css'

export default function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark ">
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/Home">
            <img 
              src="/Assets/Logo.png" 
              alt="Logo" 
              width={50} 
              height={50}
            />
            &nbsp;Food Bug
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            style={{borderColor:'white'}}
          >
            <span className="navbar-toggler-icon">
            <FontAwesomeIcon icon={faBars} style={{color: "#f4f6fa", marginTop:"4px"}} />            </span>
          </button>
          <div className="collapse navbar-collapse " id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto custom-center">
              <li 
                className="nav-item"
                style={{marginRight:'30px'}}
                >
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/Home"
                >
                  Home
                </a>
              </li>
             
              <li 
                className="nav-item dropdown"
                style={{marginRight:'25px'}}
                >
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/Menu">
                      Menu
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
              <li 
                className="nav-item"
                >
                <a className="nav-link text-white" href="/Contact">
                  Contact Us
                </a>
              </li>
            </ul>
            <form className="d-flex custom-center " role="search">
              <a href="/Login"
              >
                <button 
                className="btn btn-outline-light" 
                type="submit"
                style={{margin:'1rem'}}
                >
                Log In
              </button>
              </a>
              
                <button 
                className="btn btn-outline-light" 
                type="submit"
                style={{margin:'1rem'}}
                >
               <a href="/SignUp">
                Sign Up
              </a> 
                
              </button>
            
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

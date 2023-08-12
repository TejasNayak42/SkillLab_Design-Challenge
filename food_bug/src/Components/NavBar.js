import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "../CSS/Global.css";

export default function NavBar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark "
        style={{ paddingTop: "0", paddingBottom: "0" }}
      >
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">
            <img src="/Assets/Logo.png" alt="Logo" width={50} height={50} />
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
            style={{ borderColor: "white" }}
          >
            <span className="navbar-toggler-icon">
              <FontAwesomeIcon
                icon={faBars}
                style={{ color: "#f4f6fa", marginTop: "3px" }}
              />{" "}
            </span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto custom-center">
              <li className="nav-item" style={{ paddingRight: "4px" }}>
                <a
                  className="nav-link active text-white"
                  aria-current="page"
                  href="/"
                >
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link text-white" href="/Menu">
                  Menu
                </a>
              </li>
              <li className="nav-item dropdown" style={{ paddingRight: "4px" }}>
                <a
                  className="nav-link dropdown-toggle text-white"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  About 
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a className="dropdown-item" href="/About">
                      About us
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="/About">
                      Contact Information
                    </a>
                  </li>
                </ul>
              </li>
              <li style={{ marginLeft: "0.25rem" }}>
                <button
                  type="button"
                  className="btn btn-success"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Order Now
                </button>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Cart
                        </h5>
                        <button
                          type="button"
                          className=" btn-closes"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          Go Back
                        </button>
                      </div>
                      <div className="modal-body">Feature Yet to come ...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <form className="d-flex custom-center " role="search">
              <button
                className="btn btn-outline-light"
                type="submit"
                style={{ margin: "1rem" }}
              >
                <a href="/Login">Log In</a>
              </button>
              <button
                className="btn btn-outline-light"
                type="submit"
                style={{ margin: "1rem" }}
              >
                <a href="/SignUp">Sign Up</a>
              </button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

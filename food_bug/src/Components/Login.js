import React from 'react'
import "../CSS/Global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faSafari,
  faMicrosoft,
  faEdgeLegacy,
} from "@fortawesome/free-brands-svg-icons";
export default function Login() {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 "
      id="bimg"
      style={{ backgroundColor: "#dfe9eb" }}
    >
      <div
        className="signup-container "
        style={{ width: "400px", height: "550px" }}
      >
        <form>
          <h2 className="text-center">Log In</h2>
          <div>
            <label htmlFor="Email">Email :</label>
            <input
              type="email"
              placeholder="abcdef123@gmail.com"
              name="Email"
              className="form-control mb-3"
            />
          </div>
          <div>
            <label htmlFor="Password">Enter Your Password :</label>
            <input
              type="password"
              placeholder="Enter Your password"
              name="Password"
              className="form-control mb-2"
            />
          </div>
          <div className="d-grid">
            <button className="btn btn-danger">Login</button>
          </div>
          <div className="text-center my-3 or-line">
            or
            <div className="row">
              <div className="col-12 ">
                <div
                  className=" p-3 text-center"
                  style={{ cursor: "pointer",backgroundColor:"#ead1dc" }}
                >
                  <FontAwesomeIcon icon={faGoogle} size="lg" />
                </div>
              </div>
              <div className="col-12">
                <div
                  className=" p-3 mt-2 text-center"
                  style={{ cursor: "pointer",backgroundColor:"#ead1dc" }}
                >
                  <FontAwesomeIcon icon={faMicrosoft} size="lg" />
                </div>
              </div>
              <div className="col-12">
                <div
                  className=" p-3 mt-2 text-center"
                  style={{ cursor: "pointer",backgroundColor:"#ead1dc" }}
                >
                  <FontAwesomeIcon icon={faEdgeLegacy} size="lg" />
                </div>
              </div>
              <div className="col-12">
                <div
                  className=" p-3 mt-2 text-center"
                  style={{ cursor: "pointer",backgroundColor:"#ead1dc" }}
                >
                  <FontAwesomeIcon icon={faSafari} size="lg" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

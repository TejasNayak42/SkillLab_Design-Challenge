import React from "react";
import "../CSS/Global.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGoogle,
  faSafari,
  faMicrosoft,
  faEdgeLegacy,
} from "@fortawesome/free-brands-svg-icons";
export default function SignUp() {
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
          <h2 className="text-center">Sign Up</h2>
          <div>
            <label htmlFor="Email">Enter Your Name :</label>
            <input
              type="text"
              placeholder="Tejas Nayak B"
              name="text"
              className="form-control mb-3"
            />
          </div>
          <div>
            <label htmlFor="Email">Phone Number :</label>
            <input
              type="number"
              placeholder="+91 1234567890"
              className="form-control mb-3"
            />
          </div>
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
          <div>
            <input type="checkbox" />
            <label htmlFor="checkbox" className="mb-3">
              Remember Your Password
            </label>
          </div>
          <div className="d-grid">
            <button className="btn btn-danger">Login</button>
          </div>
          <div className="text-center my-3 or-line">
            <span className="line"></span> or <span className="line"></span>
            <div className="row">
              <div className="col-3 ">
                <div
                  className="bg-light p-1 text-center"
                  style={{ cursor: "pointer" }}
                >
                  <FontAwesomeIcon icon={faGoogle} size="lg" />
                </div>
              </div>
              <div className="col-3">
                <div
                  className="bg-light p-1 text-center"
                  style={{ cursor: "pointer" }}
                >
                  <FontAwesomeIcon icon={faMicrosoft} size="lg" />
                </div>
              </div>
              <div className="col-3">
                <div
                  className=" bg-light p-1 text-center"
                  style={{ cursor: "pointer" }}
                >
                  <FontAwesomeIcon icon={faEdgeLegacy} size="lg" />
                </div>
              </div>
              <div className="col-3">
                <div
                  className="bg-light p-1 text-center"
                  style={{ cursor: "pointer" }}
                >
                  <FontAwesomeIcon icon={faSafari} size="lg" />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

import React from "react";

export default function Home() {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        className="carousel slide mt-5 "
        data-bs-ride="carousel"
        style={{ marginBottom: "100px" }}
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="/Assets/NorthIndian.jpg"
              className="d-block w-75 mx-auto"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/Assets/Pizza.jpg"
              className="d-block w-75 mx-auto"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="/Assets/Burger.jpg"
              className="d-block w-75 mx-auto"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <hr />
      <div
        className="card mx-auto  "
        style={{ width: "18rem", marginBottom: "95px", marginTop: "70px" }}
      >
        <div className="card-header">Featured</div>
        <div className="card-body">
          <h5 className="card-title">Explore Menu</h5>
          <p className="card-text">
            {" "}
            For More Cards!-{">"}Please explore our new Menu .
          </p>
          <a href="/Menu" className="btn btn-primary">
            Menu
          </a>
        </div>
      </div>
    </div>
  );
}

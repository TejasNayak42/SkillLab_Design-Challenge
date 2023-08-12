import React from "react";

export default function About() {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center vh-100">
      <img
        src="/Assets/Logo.png"
        alt=""
        srcset=""
        width={"250px"}
        height={"250px"}
        style={{ marginTop: "-100px", marginBottom: "20px" }}
      />
      <div className="accordion" id="accordionPanelsStayOpenExample">
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseOne"
            >
              <strong>Organisation Information</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body">
              <strong>Lorem ipsum dolor sit amet, consectetur</strong> Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
              justo nec libero fermentum sagittis. Pellentesque ut volutpat
              libero. Suspendisse nec lorem et nunc facilisis varius. Fusce
              aliquet tortor in arcu dictum, vel vehicula libero sollicitudin.
              Nullam auctor, quam nec tempor dignissim, mi nisl gravida lectus,
              eu convallis libero elit non justo.{" "}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              <strong>Contact Information</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body">
              <strong>Lorem ipsum dolor sit amet, consectetur</strong> Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
              justo nec libero fermentum sagittis. Pellentesque ut volutpat
              libero. Suspendisse nec lorem et nunc facilisis varius. Fusce
              aliquet tortor in arcu dictum, vel vehicula libero sollicitudin.
              Nullam auctor, quam nec tempor dignissim, mi nisl gravida lectus,
              eu convallis libero elit non justo.{" "}
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              <strong>Address</strong>
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body">
              <strong>Lorem ipsum dolor sit amet, consectetur</strong> Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae
              justo nec libero fermentum sagittis. Pellentesque ut volutpat
              libero. Suspendisse nec lorem et nunc facilisis varius. Fusce
              aliquet tortor in arcu dictum, vel vehicula libero sollicitudin.
              Nullam auctor, quam nec tempor dignissim, mi nisl gravida lectus,
              eu convallis libero elit non justo.{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import "../CSS/Global.css";
export default function Menu() {
  return (
    <div>
      <div
        class="row row-cols-1 row-cols-md-4 g-4 mx-auto mt-5 "
        style={{ marginBottom: "4rem" }}
      >
        <div class="col">
          <div class="card" style={{ width: "22rem" }}>
            <img
              src="/Assets/NorthIndian.jpg"
              class="card-img-top"
              alt="North-Indian"
            />
            <div class="card-body">
              <h5 class="card-title">North Indian Thali</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="/" class="btn btn-primary">
                Order
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style={{ width: "22rem" }}>
            <img src="/Assets/Ramen.jpg" class="card-img-top" alt="Ramen" />
            <div class="card-body">
              <h5 class="card-title">Ramen</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="/" class="btn btn-primary">
                Order
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style={{ width: "22rem" }}>
            <img src="/Assets/Sushi.jpg" class="card-img-top" alt="Sushi" />
            <div class="card-body">
              <h5 class="card-title">Sushi</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="/" class="btn btn-primary">
                Order
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style={{ width: "22rem" }}>
            <img src="/Assets/Desert.jpg" class="card-img-top" alt="Desert" />
            <div class="card-body">
              <h5 class="card-title">Ice_Cream</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="/" class="btn btn-primary">
                Order
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style={{ width: "22rem" }}>
            <img src="/Assets/Pizza.jpg" class="card-img-top" alt="Pizza" />
            <div class="card-body">
              <h5 class="card-title">Pizza</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="/" class="btn btn-primary">
                Order
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style={{ width: "22rem" }}>
            <img src="/Assets/Burger.jpg" class="card-img-top" alt="Burger" />
            <div class="card-body">
              <h5 class="card-title">Burger</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="/" class="btn btn-primary">
                Order
              </a>
            </div>
          </div>
        </div>

        <div class="col">
          <div class="card" style={{ width: "22rem" }}>
            <img src="/Assets/Pancake.jpg" class="card-img-top" alt="Pancake" />
            <div class="card-body">
              <h5 class="card-title">Pancake</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="/" class="btn btn-primary">
                Order
              </a>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card" style={{ width: "22rem" }}>
            <img
              src="/Assets/Crossoint.webp"
              class="card-img-top"
              alt="Crossoint"
            />
            <div class="card-body">
              <h5 class="card-title">Crossoint</h5>
              <p class="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <a href="/" class="btn btn-primary">
                Order
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

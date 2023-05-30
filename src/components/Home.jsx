import React from "react";
import Product from './Product'

const Home = () => {
  return (
    <div>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
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
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="3"
            aria-label="Slide 4"
          ></button>
        </div>
        <div class="carousel-inner" style={{ marginBottom: "200px" }}>
          <div class="carousel-item active">
            <img
              src="/assets/images/cards/ft3.png"
              class="d-block w-100"
              alt=""
              height="600px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="/assets/images/cards/ft2.png"
              class="d-block w-100"
              alt="IPhone"
              height="600px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="/assets/images/cards/ft.png"
              class="d-block w-100"
              alt="IPhone"
              height="600px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="/assets/images/cards/ft4.png"
              class="d-block w-100"
              alt="IPhone"
              height="600px"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Anterior</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Próximo</span>
        </button>
      </div>

      <Product/>

      <div>
        <div className="container py-5">
          <div className="row">
            
            <div className="col-12 text-center" >
                <a href="/products" className="text-dark fw-bold mb-4 text-center arrumar" style={{ marginTop: "20px" }}>
                    Veja mais...
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

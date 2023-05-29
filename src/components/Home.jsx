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
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src="https://media.discordapp.net/attachments/958144099603591178/1104597880230137957/flor.png?width=1440&height=533"
              class="d-block w-100"
              alt=""
              height="500px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://media.discordapp.net/attachments/958144099603591178/1104598353284694016/flor3.png?width=1440&height=533"
              class="d-block w-100"
              alt="IPhone"
              height="500px"
            />
          </div>
          <div class="carousel-item">
            <img
              src="https://media.discordapp.net/attachments/1044253591789117440/1104599675769729044/flor3.png?width=1440&height=533"
              class="d-block w-100"
              alt="IPhone"
              height="500px"
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
            
            <div className="col-12 text-center">
              <h1 className="text-dark fw-bold mb-4 text-center">
                Nosso trabalho
              </h1>
              <p>
                Nossos talentosos floristas estão sempre prontos para criar
                arranjos espetaculares, combinando habilmente diferentes tipos
                de flores, folhagens e acessórios, para transmitir emoções e
                contar histórias. Cada arranjo é único e personalizado, feito
                com amor e dedicação, garantindo que cada pétala e cada folha
                estejam no lugar certo.
              </p>
              <p>
                Além das flores cortadas e dos arranjos, também oferecemos uma
                variedade de plantas de interior e de jardim, para adicionar um
                toque de verde e frescor aos seus espaços. Se você é um
                jardineiro entusiasta ou está apenas começando a explorar o
                mundo das plantas, nossa equipe estará feliz em compartilhar
                conhecimentos e dicas para ajudá-lo a cuidar das suas plantas
                com carinho e sucesso
              </p>
              <p>
                Na nossa floricultura, você também encontrará uma seleção de
                presentes encantadores, como vasos elegantes, cestas de
                presentes temáticas e acessórios exclusivos. Complemente seu
                arranjo floral com um toque especial e torne-o ainda mais
                memorável.
              </p>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

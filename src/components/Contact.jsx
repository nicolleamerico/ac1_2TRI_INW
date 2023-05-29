import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="container py-5 my-5">
          <div className="col-12 text-center">
            <h1 className="text-dark fw-bold mb-4">Contato</h1>
            <hr />
          </div>
        
        <div className="row controle">
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/about.png"
              alt="About Us"
              height="350px"
              width="400px"
            />
          </div>
          <div className="col-md-6">
            <p>
              {" "}
              Email: queroPneu@gmail.com
            </p>
            <p>
              {" "}
              Telefone:(11) 2240-8033
            </p>
            <p>
              {" "}
              WhatsApp: (11) 94172-8033
            </p>
            <p>
              {" "}
              Encontre nossa loja: Av La Isla, 512 - Quack, São Paulo
            </p>
            <p>

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

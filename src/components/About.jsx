import React from "react";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-dark fw-bold mb-4">Sobre nós</h1>
            <p>
              A criação da nossa empresa de floricultura foi um empreendimento
              desafiador e exigente, que requer planejamento cuidadoso,
              conhecimento especializado e dedicação à excelência. Para ter
              sucesso neste mercado, é necessário compreender profundamente as
              necessidades dos clientes, a dinâmica do mercado e as melhores
              práticas de negócios.{" "}
            </p>
            <p>
              {" "}
              O primeiro passo foi realizar uma pesquisa de mercado abrangente,
              para identificar as oportunidades e os desafios deste setor. A
              localização ideal deve ser de fácil acesso para os clientes, e
              preferencialmente em áreas com grande circulação de pessoas, como
              centros comerciais, regiões turísticas e áreas residenciais.{" "}
            </p>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="/assets/about.png"
              alt="About Us"
              height="400px"
              width="400px"
            />
          </div>
        </div>

        <div className="row">
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="https://cdn.discordapp.com/attachments/719956666254098446/1104604037384515625/timeempresa.jpg"
              alt="About Us"
              height="250px"
              width="400px"
            />
          </div>
          <div className="col-md-6">
            <p>
              {" "}
              Outro fator importante foi a seleção de um fornecedor confiável de
              flores e plantas, que ofereça produtos frescos e de alta
              qualidade. É fundamental estabelecer parcerias com fornecedores
              locais e internacionais, para garantir um estoque diversificado e
              adequado às necessidades dos clientes. Além disso, a equipe de
              funcionários da loja de flores deve ser altamente qualificada e
              treinada, com habilidades em arranjos florais, decoração de
              eventos e atendimento ao cliente. É importante investir em
              capacitação contínua, para manter a qualidade do serviço e a
              satisfação dos clientes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

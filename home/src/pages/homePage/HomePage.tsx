import React, { useState } from "react";
import "./HomePage.css";
import pinesImg from "./../../domain/assets/pinesImg.png";
import logoImg from "./../../domain/assets/CooFIAP.png";
import headerImg from "./../../domain/assets/headerImg.png";
import Header from "../../components/header/Header";
import CardMini from "../../components/cardMini/CardMini";
import LoginModal from "../../components/loginModal/LoginModal";
import CreateAccountModal from "../../components/createAccountModal/CreateAccountModal";

const HomePage: React.FC = () => {
  const [isModalLoginOpen, setIsModalLoginOpen] = useState(false);
  const [isModalCreateAccountOpen, setIsModalCreateAccountOpen] =
    useState(false);

  return (
    <>
      <div className="container">
        <Header
          onClickCreateAccount={() => setIsModalCreateAccountOpen(true)}
          onClickLogin={() => setIsModalLoginOpen(true)}
        />
        <div className="header-container">
          <h1 className="title-home">
            <div className="logo-container-big">
              <img src={pinesImg} alt="Pinheiros" className="pine-image-big" />
              <img src={logoImg} alt="CooFIAP" className="logo-image-big" />
            </div>
            Cooperativa de produtores rurais de Fiapolis e região
          </h1>
          <button className="home-button">Quero ser um cooperado</button>
        </div>
        <div className="img-container">
          <img src={headerImg} alt="Alface" className="header-image" />
        </div>
        <div className="locations-container">
          <h2 className="locations-title">Nossas unidades</h2>
          <p className="locations-subtitle">
            Visite nossas cooperativas e mercados e encontre nossos produtos
          </p>
          <div className="card-group">
            <div className="card-line">
              <CardMini
                title="Fiapolis - Cooperativa"
                subtitle="Rua dos Ipês - nº 123"
              />
              <CardMini
                title="Fiapolis - Mercado"
                subtitle="Rua dos Ipês - nº 456"
              />
            </div>
            <div className="card-line">
              <CardMini
                title="Fiapolândia - Cooperativa"
                subtitle="Rua dos Ipês - nº 123"
              />
              <CardMini
                title="Fiapolândia - Mercado"
                subtitle="Rua dos Ipês - nº 123"
              />
            </div>
            <div className="card-line">
              <CardMini
                title="Fiapós do Sul - Cooperativa"
                subtitle="Rua dos Ipês - nº 123"
              />
              <CardMini
                title="Fiapós do Sul - Mercado"
                subtitle="Rua dos Ipês - nº 123"
              />
            </div>
          </div>
        </div>
      </div>
      <LoginModal
        isOpen={isModalLoginOpen}
        onClose={() => setIsModalLoginOpen(false)}
      />
      <CreateAccountModal
        isOpen={isModalCreateAccountOpen}
        onClose={() => setIsModalCreateAccountOpen(false)}
      />
    </>
  );
};

export default HomePage;

import React from "react";
import "./HomePage.css";
import pinesImg from "./../../domain/assests/pinesImg.png";
import logoImg from "./../../domain/assests/CooFIAP.png";
import headerImg from "./../../domain/assests/headerImg.png";
import Card from "../../components/card/Card";

const HomePage: React.FC = () => {
  return (
    <div className="container">
      <div className="header-container">
        <h1 className="title">
          <div className="logo-container">
            <img src={pinesImg} alt="Pinheiros" className="pine-image" />
            <img src={logoImg} alt="CooFIAP" className="logo-image" />
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
            <Card
              title="Fiapolis - Cooperativa"
              subtitle="Rua dos Ipês - nº 123"
            />
            <Card title="Fiapolis - Mercado" subtitle="Rua dos Ipês - nº 456" />
          </div>
          <div className="card-line">
            <Card
              title="Fiapolândia - Cooperativa"
              subtitle="Rua dos Ipês - nº 123"
            />
            <Card
              title="Fiapolândia - Mercado"
              subtitle="Rua dos Ipês - nº 123"
            />
          </div>
          <div className="card-line">
            <Card
              title="Fiapós do Sul - Cooperativa"
              subtitle="Rua dos Ipês - nº 123"
            />
            <Card
              title="Fiapós do Sul - Mercado"
              subtitle="Rua dos Ipês - nº 123"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

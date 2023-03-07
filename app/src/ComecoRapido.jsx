import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ComecoRapido.css"
import Button from "react-bootstrap/Button";
import avatar from "./Imagem/avatar.png"

function MeuBotao() {
  return <Button variant='primary'>Eu sou um botão</Button>;
}

function PaginaSobre() {
  return (
    <>
      <h1>Sobre</h1>
      <p>
        Olá aqui. <br />
        Como vai você?
      </p>
    </>
  );
}

export default function MyApp() {
  return (
    <>
      <h1>Bem-vindo ao meu app</h1>
      <MeuBotao />
      <img className="avatar" src={avatar} alt="avatar"/>
    </>
  );
}

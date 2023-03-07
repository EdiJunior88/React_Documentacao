import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';


function MeuBotao() {
  return (
    <Button variant='primary'>Eu sou um botão</Button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Bem-vindo ao meu app</h1>
      <MeuBotao />
    </div>
  );
}

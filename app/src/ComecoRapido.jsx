import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./ComecoRapido.css";

const ComecoRapido = () => {
  const [contador, setContador] = useState(0);

  function clique() {
    setContador(contador + 1);
  }

  function Botao({ contador, onClick }) {
    return (
      <Button variant='primary' onClick={onClick}>
        Clicou {contador} vezes
      </Button>
    );
  }

  return (
    <div>
      <h1>Contadores que atualizam juntos</h1>
      <Botao contador={contador} onClick={clique} />
      <Botao contador={contador} onClick={clique} />
    </div>
  );
};

export default ComecoRapido;

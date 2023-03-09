import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./ComecoRapido.css";

const ComecoRapido = () => {
  function Botao() {
    const [contador, setContador] = useState(0);

    function clique() {
      setContador(contador + 1);
    }

    return (
      <Button variant='primary' onClick={clique}>
        Clicou {contador} vezes
      </Button>
    );
  }

  return (
    <div>
      <h1>Contadores são atualizados separadamente</h1>
      <Botao />
      <Botao />
    </div>
  );
};

export default ComecoRapido;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./ComecoRapido.css";

const ComecoRapido = () => {
  function clique() {
    alert("Você clicou em mim!");
  }

  return (
    <Button variant='primary' onClick={clique}>
      Clique aqui
    </Button>
  );
};

export default ComecoRapido;

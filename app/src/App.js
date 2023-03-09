import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import "./App.css";

const App = () => {
  function Quadrado() {
    const [valor, setValor] = useState(null);

    function clique() {
      setValor("X")
    }

    return (
      <Button variant='outline-primary' className='square' onClick={clique}>
        {valor}
      </Button>
    );
  }

  return (
    <>
      <div className='board-row'>
        <Quadrado />
        <Quadrado />
        <Quadrado />
      </div>

      <div className='board-row'>
        <Quadrado />
        <Quadrado />
        <Quadrado />
      </div>

      <div className='board-row'>
        <Quadrado />
        <Quadrado />
        <Quadrado />
      </div>
    </>
  );
};

export default App;

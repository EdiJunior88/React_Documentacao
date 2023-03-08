import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ComecoRapido.css";

const produtos = [
  { titulo: "Repolho", fruta: false, id: 1 },
  { titulo: "Alho", fruta: false, id: 2 },
  { titulo: "Maçã", fruta: true, id: 3 },
];

export default function MyApp() {
  const listaItens = produtos.map((produto) => (
    <li key={produto.id} style={{color: produto.fruta ? "magenta" : "darkgreen"}}>{produto.titulo}</li>
  ));

  return <ul>{listaItens}</ul>;
}

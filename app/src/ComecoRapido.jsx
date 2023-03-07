import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ComecoRapido.css";

const usuario = {
  nome: "Edivaldo Junior",
  imagemUrl: "https://avatars.githubusercontent.com/u/13875907?v=4",
  imagemTamanho: 90,
};

export default function MyApp() {
  return (
    <>
      <h1>{usuario.nome}</h1>
      <img
        className='avatar'
        src={usuario.imagemUrl}
        alt={"Avatar do " + usuario.nome}
        style={{ width: usuario.imagemTamanho, height: usuario.imagemTamanho }}
      />
    </>
  );
}

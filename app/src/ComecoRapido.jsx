import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ComecoRapido.css";

const usuario = {
  nome: "Edivaldo Junior",
  imagemUrl: "https://avatars.githubusercontent.com/u/13875907?v=4",
  imagemTamanho: 90,
};

function PainelAdministrador() {
  return (
    <div>
      <h1>Painel de Administrador</h1>
      <p>Está logado</p>
    </div>
  );
}

function FormularioLogin() {
  return (
    <form>
      <h1>Formulario de Login</h1>
      <label htmlFor='nome'>Nome: </label>
      <input type='text' name='nome' />
    </form>
  );
}

export default function MyApp() {
  //Em vez disso, você usará as mesmas técnicas usadas
  //ao escrever código JavaScript regular. Por exemplo,
  //você pode usar uma if instrução para incluir JSX condicionalmente:
  // let conteudo;
  // let estaLogadoEm = true;

  // if (estaLogadoEm) {
  //   conteudo = <PainelAdministrador />;
  // } else {
  //   conteudo = <FormularioLogin />;
  // }

  // return <>{conteudo}</>;

  //----------------------------------------------

  //Se você preferir um código mais compacto,
  //pode usar o operador condicional ?.
  //Ao contrário do if, ele funciona dentro do JSX:

  // let estaLogadoEm = true;
  // return (
  //   <div>{estaLogadoEm ? <PainelAdministrador /> : <FormularioLogin />}</div>
  // );

  //Quando você não precisa da elseramificação,
  //também pode usar uma sintaxe lógica&& mais curta:
  let estaLogadoEm = true;
  return <div>{estaLogadoEm && <PainelAdministrador />}</div>;
}

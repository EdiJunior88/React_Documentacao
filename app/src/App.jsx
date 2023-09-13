import { useState } from "react";

export default function App() {
  return (
    <div>
      <h1>A contagem sofre alterações separadas</h1>
      <MeuBotao />
      <br />
      <MeuBotao />
    </div>
  );
}

function MeuBotao() {
  const [contagem, setContagem] = useState(0);

  function contagemClique() {
    setContagem(contagem + 1);
  }

  return <button onClick={contagemClique}>Você clicou {contagem}x</button>;
}

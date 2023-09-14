import { useState } from "react";

export default function App() {
  const [contagem, setContagem] = useState(0);

  function contagemClique() {
    setContagem(contagem + 1);
  }

  return (
    <div>
      <h1>A contagem sofre alterações separadas</h1>
      <MeuBotao contagem={contagem} onClick={contagemClique} />
      <br />
      <MeuBotao contagem={contagem} onClick={contagemClique} />
    </div>
  );
}

function MeuBotao({ contagem, onClick }) {
  return <button onClick={onClick}>Você clicou {contagem}x</button>;
}

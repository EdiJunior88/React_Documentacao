const produtos = [
  { titulo: "Couve", fruta:false, id: 1 },
  { titulo: "Alho", fruta:false, id: 2 },
  { titulo: "Maçã", fruta:true, id: 3 },
];

const App = () => {
  const listaItens = produtos.map((produto) => (
    <li
      key={produto.id}
      style={{ color: produto.fruta ? "magenta" : "darkgreen" }}>
      {produto.titulo}
    </li>
  ));

  return <ul>{listaItens}</ul>;
};

export default App;

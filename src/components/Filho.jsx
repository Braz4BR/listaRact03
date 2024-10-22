// Exercício02
const Filho = ({ mensagem }) => {
  return <h1>{mensagem}</h1>;
};

const Pai = () => {
  const mensagemParaFilho = "Olá do filhote!";

  return (
    <div>
      <h2>Componente Pai</h2>
      <Filho mensagem={mensagemParaFilho} />
    </div>
  );
};

export default Pai;

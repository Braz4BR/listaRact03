//exercicio 03

function Falso() {
	return <h1>ERRO</h1>;
}

function Verdadeiro() {
	return <p>Esse texto deve ficar aparente apenas no caso de resposta correta.</p>;

}

function Resposta(props) {
  const msg = props.msg;
  if (msg ===true) {
    return <Verdadeiro/>;
  }else{
  return <Falso/>;
    }
}

export default Resposta;
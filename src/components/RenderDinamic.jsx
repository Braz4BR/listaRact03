//Exercício06

function Texto(props) {
    const is = props.boolean;
    const condicao = is ? (
      <span style={{ backgroundColor: "red", color: "#000" }}>Verdade</span>
    ) : (
      <span style={{ backgroundColor: "black", color: "#fff" }}>Falso</span>
    );
  
    return <>{condicao}</>;
  }
  
  export default Texto;
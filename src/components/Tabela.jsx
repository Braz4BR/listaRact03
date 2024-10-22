//Exercício04
function Msg(props) {
    return <li>Me chamo { props.names }</li>;
  }
  
  function Nomes() {
    const nomes = [
      {id: 1, names: 'Davi'},
      {id: 2, names: 'Vinicinhos'},
      {id: 3, names: 'Fernando'}
    ];
    return (
      <>
        <ul>
          {nomes.map((tk) => <Msg key={tk.id} names={tk.names} />)}
        </ul>
      </>
    );
  }

  export default Nomes;
  
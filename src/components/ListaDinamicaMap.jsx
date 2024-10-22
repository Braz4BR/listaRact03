//exercício01
function Mensagem(proops) {
    return(
        <li>Agente: {proops.nome}</li>
    )
};

function Agentes() {
    const radiantes =['Sage'  , 'Oman' , 'Raze'  , 'Jett' , 'Brinstorm' , 'Yoru', 'Fade' , 'Skye', 'Reyna' ] 

    return(
        <>
        <h1>Lista de Agentes</h1>
        <ul>{radiantes.map((radiantes) => <Mensagem nome ={radiantes}/>)}</ul>
        </>
    )
}

export default  Agentes;
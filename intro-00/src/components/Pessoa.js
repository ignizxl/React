//fazendo a desestruturação do props
function Pessoa({nome, idade, profissao, src}){
    return(
        <div>
            <h2>Informações</h2>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Profissão: {profissao}</p>
            <img src={src} alt="Minha imagem"></img>
        </div>
    );
}

export default Pessoa;

function Saudacao({nome}){
  function gerarSaudacao(algumNome){
    return `Olá, ${algumNome}! tudo bem?`;
  }
  return (
    <>
    {/* condição */}
    {/* se há algo em nome, irá imprimir a saudação */}   
    {nome && <p>{gerarSaudacao(nome)}</p>}
    </>
  );
}

export default Saudacao;

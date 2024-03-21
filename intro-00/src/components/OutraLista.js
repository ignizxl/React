function OutraLista({itens}){
  return (
    <>
      <h1>Lista de Itens</h1>
      {/* verificando se o tamanho da lista é maior que 0, se for, significa que tem item pra ser renderizado */}
      {/* condição */}
      { itens.length > 0 ? (
      // bloco de código do if 
      // item representa o elemento atual e o index representa a posição do elemento atual
        itens.map((item, index) => (
          // quando a gente usa o map a gente precisa que cada um dos itens tenha um id único.
          // a key irá receber o index, que é a posição do elemento atual 
          <p key={index}>{item}</p>
        )))
      // condição  
      : (
      // bloco de código do else
        <p>Não há itens na lista!</p>
      )}
    </>
  );
}
export default OutraLista;
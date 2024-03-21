import { useState } from "react";

function Condicional(){

  function enviarEmail(event){
    event.preventDefault();
    setUserEmail(email);
  }
  function limparEmail(){
    //deixando o userEmail como uma string vazia 
    setUserEmail('');
  }

  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();
  return (
    <div>
      <form>
        <label htmlFor="email">Email: </label>
        <input type="email" name="email" id="email" placeholder="digite seu email" onChange={(event) => setEmail(event.target.value)}/>
        <button type="submit" onClick={enviarEmail}>Enviar Email</button>
        {/* Renderização condicional */}
        {/* Verifica se o userEmail é verdadeiro, ou seja, se o userEmail foi preenchido, e se essa condição for verdadeira
            vai renderizar uma mensagem na tela */}
        {userEmail &&(
          <div>
            <p>O email validado foi: {userEmail}</p>
            <button type="button" onClick={limparEmail}>Limpar Email</button>
          </div>
        )}
      </form>
    </div>
  );
}

export default Condicional;
//importação do hook 'useState'
import { useState } from "react";

function Form (){
    function realizarCadastro(event){
        // O preventDefault irá impedir que o processamento/reload seja feito ao realiazar o onSubmit, ele vai parar o envio do formulário para o servidor e irá executar as linhas de comando abaixo.

        event.preventDefault();
        console.log("Cadastro realizado!");
        console.log(`O usuário ${name} foi cadastrado com a senha ${password}.`);
    }

    // definindo duas constantes:
    // name é a variável e setName é a função que irá setar a variável name.
    // eu posso deixar o valor de name já setado assim que eu utilizar o useState. ex: useState('joão igor') -> o valor inicial de name
    // será 'joão igor'
    const [name, setName]         = useState();
    const [password, setPassword] = useState();

    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={realizarCadastro}>
                <div>
                    <label htmlFor="name">Nome: </label>
                    <input type="text" name="name" id="name" placeholder="Digite o seu nome" onChange={(event) => setName(event.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Senha: </label>
                    <input type="password" name="password" id="password" placeholder="Digite sua senha" onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    );
}

export default Form;
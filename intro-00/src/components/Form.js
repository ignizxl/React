
function Form (){
    function realizarCadastro(event){
        // O preventDefault irá impedir que o processamento/reload seja feito ao realiazar o onSubmit, ele vai parar o envio do formulário para o servidor e irá executar as linhas de comando abaixo.
        
        event.preventDefault();
        console.log("Cadastro realizado!")
    }

    return(
        <div>
            <h1>Meu cadastro:</h1>
            <form onSubmit={realizarCadastro}>
                <div>
                    <input type="text" placeholder="Digite o seu nome"/>
                </div>
                <div>
                    <input type="submit" value="Cadastrar"/>
                </div>
            </form>
        </div>
    );
}

export default Form;
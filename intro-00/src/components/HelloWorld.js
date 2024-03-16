import Frase from "./Frase";

function HelloWorld(){
    return (
        <div>  
            {/* importando o componente Frase */}
            <Frase></Frase>   
            <h1>Meu primeiro componente!</h1> 
             {/* reutilizando o componente  */}
            <Frase></Frase> 
        </div>
    );
}
export default HelloWorld;
import Button from './Button';
import React from 'react'

function Evento(){
    //let count = 0;
    function dispararEvento(){
        //count++;
        //console.log(`Olá, ${nome}! Você disparou este evento ${count} vezes.`);
        console.log("Ativando primeiro evento.");
    }
    function dispararSegundoEvento(){
        console.log("Ativando segundo evento.")
    }

    return (
    <div>
        <p>Clique para disparar um evento! <strong>OBS: abra o console!</strong></p>
        {/* passando os valores das props */}
        <Button event={dispararEvento} text="Primeiro evento"></Button>
        {/* reaproveitando o componente e mudando os valores das props */}
        <Button event={dispararSegundoEvento} text="Segundo evento"></Button>
    </div>
  );
}

export default Evento;
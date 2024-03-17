import React from 'react'

function Evento({nome}){
    let count = 0;
    function dispararEvento(){
        count++;
        console.log(`Olá, ${nome}! Você disparou este evento ${count} vezes.`);
    }

    return (
    <div>
        <p>Clique para disparar um evento! <strong>OBS: abra o console!</strong></p>
        <button onClick={dispararEvento}>Disparar evento</button>
    </div>
  );
}

export default Evento;
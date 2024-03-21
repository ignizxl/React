import './App.css';
import { useState } from 'react';
import SeuNome from './components/SeuNome';


// import HelloWorld from './components/HelloWorld';
// import SayMyName from './components/SayMyName';
// import Pessoa from './components/Pessoa';
// import List from './components/List';
// import Evento from './components/Evento';
// import Form from './components/Form';
// import Condicional from './components/Condicional';
// import OutraLista from "./components/OutraLista";

function App() {
  // const name    = 'João Igor';
  // const newName = name.toLocaleUpperCase();
  // const url     = "https://via.placeholder.com/150";
  // function somarDoisNumeros(n1, n2){
  //   return n1 + n2;
  // const linguagens = ["javascript", "python", "c++", "java"];
  // const listaVazia = [];

  // compartilhando o state nos componentes SeuNome e Saudacao
  const [nome, setNome] = useState();
  console.log(nome);
  return (
    <div className="App">
      {/* <h1>Hello World!</h1>
      <p>Este é o meu primeiro App.</p>
      <p>Alterando o JSX</p>
      <p>Olá, {name}!</p>
      <p>Olá de novo, {newName}!</p> 
      <p>A soma entre {10} e {14} é igual a {somarDoisNumeros(10, 14)}</p>
      <img src={url} alt="minha imagem"></img>*/}
      
      {/* importando o componente HelloWorld*/}
      {/* <HelloWorld></HelloWorld> */}
      {/* importando o componente SayMyName e alterando a propriedade name do meu componente*/}
      {/* <SayMyName name={name}></SayMyName>
      <Pessoa nome={"José"} idade={20} profissao={"Desenvolvedor Web"} src={url}></Pessoa> */}
      {/* <List></List> */}
      {/* <Evento></Evento>
      <Form></Form> 
      <Condicional></Condicional>
      <OutraLista itens={linguagens}></OutraLista>
      <OutraLista itens={listaVazia}></OutraLista> */}
      <h1>State Lift</h1>
      <SeuNome setNome={setNome}></SeuNome>
      <p><strong>{nome}</strong></p>
    </div>
  );
} 

export default App;

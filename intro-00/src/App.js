import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import List from './components/List';
import Evento from './components/Evento';
import Form from './components/Form';
import Condicional from './components/Condicional';

function App() {
  const name    = 'João Igor';
  // const newName = name.toLocaleUpperCase();
  const url     = "https://via.placeholder.com/150";
  // function somarDoisNumeros(n1, n2){
  //   return n1 + n2;
  // 

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
      <SayMyName name={name}></SayMyName>
      <Pessoa nome={"José"} idade={20} profissao={"Desenvolvedor Web"} src={url}></Pessoa>
      {/* <List></List> */}
      <Evento></Evento>
      <Form></Form> 
      <Condicional></Condicional>
    </div>
  );
} 

export default App;

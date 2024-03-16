import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name    = 'João Igor';
  const newName = name.toLocaleUpperCase();
  const url     = "https://via.placeholder.com/150";
  
  function somarDoisNumeros(n1, n2){
    return n1 + n2;
  }
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>Este é o meu primeiro App.</p>
      <p>Alterando o JSX</p>
      <p>Olá, {name}!</p>
      <p>Olá de novo, {newName}!</p>
      <p>A soma entre {10} e {14} é igual a {somarDoisNumeros(10, 14)}</p>
      <img src={url} alt="minha imagem"></img>
      
      {/* importando o componente HelloWorld*/}
      <HelloWorld></HelloWorld>
    </div>
  );
}

export default App;

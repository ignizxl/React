function Button(props){
  return (
      //este botão irá receber um evento e um texto que virão do props
      <button onClick={props.event}>{props.text}</button>
    );
}

export default Button;  
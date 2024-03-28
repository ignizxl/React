import styles from './Container.module.css'

function Container(props){
  return (
    // os elementos filhos que estão encapsulados nesse componentes serão encaixados dentro da div
    // inserindo classes dinâmicas com js e inserindo classes que estão vindo do props
    <div className={`${styles.container} ${styles[props.customClass]}`}>{props.children}</div>
  );
}
export default Container;
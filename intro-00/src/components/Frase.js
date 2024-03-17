// na hora de importar o css a nivel de componente eu preciso utilizar o 'styles' from
// caminho
import styles from './Frase.module.css'; 
function Frase(){
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>Este é um componente com uma frase!</p>
            <p className={styles.fraseContent}>Testando a estilização a nível de componente!</p>
        </div>
    );
}

export default Frase;
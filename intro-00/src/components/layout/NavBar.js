import { Link } from "react-router-dom";
import styles from './NavBar.module.css';

function NavBar(){
  return(
    <div>
      <ul className={styles.list}>
        <li>
          {/* o componente Link funciona como uma tag 'a' no html */}
          <Link className={styles.item} to="/">Home</Link>
        </li>
        <li>
          <Link className={styles.item} to="/empresa">Empresa</Link>
        </li>
        <li>
          <Link className={styles.item} to="/contato">Contato</Link>
        </li>
      </ul>
    </div>    
  );
}

export default NavBar;    
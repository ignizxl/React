import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
  return (
    <footer>
      <ul className={styles.social_list}>
        <li><FaFacebook></FaFacebook></li>
        <li><FaInstagram></FaInstagram></li>
        <li><FaLinkedin></FaLinkedin></li>
      </ul>
    </footer> 
     
  );
}

export default Footer;
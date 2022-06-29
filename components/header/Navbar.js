import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faBasketball, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from './Navbar.module.scss';
import Link from 'next/link';

function Navbar() {
    return ( 
            <nav className={styles.nav}>
                <ul>
                    <li id="nav_home" className={styles.active}> 
                        <Link href={'/'}>
                            <FontAwesomeIcon icon={faHouseChimney} /> 
                        </Link>
                    </li>

                    <li id="nav_shop">  
                        <Link href={'/products'}>
                            <FontAwesomeIcon icon={faBasketball}/> 
                        </Link> 
                    </li>

                    <li id="nav_contact">   
                        <Link href={'/contact'}>
                            <FontAwesomeIcon icon={faEnvelope} /> 
                        </Link>  
                    </li>
                </ul>
            </nav>
     );
}

export default Navbar;
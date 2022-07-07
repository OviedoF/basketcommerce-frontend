import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouseChimney, faBasketball, faEnvelope, faCartShopping, faPlus, faMessage, faUserGear } from "@fortawesome/free-solid-svg-icons";
import styles from './Navbar.module.scss';
import Link from 'next/link';
import { useSelector, useDispatch } from 'react-redux';

function Navbar() {
    const nav_status = useSelector(state => state.handleNavActive);
    console.log(nav_status);
    
    return ( 
            <nav className={styles.nav}>
                <ul>
                    <li id="nav_home" className={nav_status.active === 'home' ? styles.active : ''}> 
                        <Link href={'/'}>
                            <FontAwesomeIcon icon={faHouseChimney} /> 
                        </Link>
                    </li>

                    <li id="nav_shop" className={nav_status.active === 'products' ? styles.active : ''}>  
                        <Link href={'/products'}>
                            <FontAwesomeIcon icon={faBasketball}/> 
                        </Link> 
                    </li>

                    <li id="nav_contact" className={nav_status.active === 'contact_form' ? styles.active : ''}>   
                        <Link href={'/contact'}>
                            <FontAwesomeIcon icon={faEnvelope} /> 
                        </Link>  
                    </li>

                    <li id="nav_shopping_cart" className={nav_status.active === 'shopping_cart' ? styles.active : ''}>
                        <Link href={'/cart'}>
                            <FontAwesomeIcon icon={faCartShopping}/>
                        </Link>
                    </li>
                    
                    <li id="nav_add_product" className={nav_status.active === 'add_product' ? styles.active : ''}>
                        <Link href={'/admin/add-product'}> 
                            <FontAwesomeIcon icon={faPlus}/>
                        </Link>
                    </li>

                    <li id="nav_messages" className={nav_status.active === 'messages' ? styles.active : ''}>
                        <Link href={'/admin/messages'}>
                            <FontAwesomeIcon icon={faMessage}/>
                        </Link>
                    </li>

                    <li id="nav_admin" className={nav_status.active === 'admin_login' ? styles.active : ''}>
                        <Link href={'/admin'}>
                            <FontAwesomeIcon icon={faUserGear}/>
                        </Link>
                    </li>
                </ul>
            </nav>
     );
}

export default Navbar;
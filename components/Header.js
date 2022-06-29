import styles from './Header.module.scss';
import Logo from './Logo';
import Navbar from './header/Navbar';

function Header() {
    return ( 
        <header className={styles.header}>
            <div className={styles.logo_container}>
                <Logo />
            </div>

            <Navbar />
        </header>
     );
}

export default Header;
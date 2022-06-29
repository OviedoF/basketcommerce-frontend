import Image from 'next/image';
import styles from './HomeDiv.module.scss';
import Link from 'next/link';

function HomeDiv({imageBanner, title, two_row, redirectTo}) {
    return ( 
        <Link href={'/' + redirectTo}>
            <div className={two_row ? styles.two_row : ''} id={styles.banner_container}>

                <Image 
                    src={imageBanner}  
                    alt={title + 'banner'}
                    objectFit={'cover'} 
                    layout={'fill'} 
                    className={styles.image} 
                />

                <h2>{title}</h2>

            </div>
        </Link>
     );
}

export default HomeDiv;
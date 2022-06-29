import styles from './HomeSection.module.scss';
import shirts from '../../assets/imgs/main/T-Shirts..jpg';
import sneakers from '../../assets/imgs/main/Sneakers.jpg';
import collection from '../../assets/imgs/main/Conjuntos.jpg';
import HomeDiv from './HomeDiv';

function HomeSection() {
    return ( 
        <section className={styles.grid_container}>
            <HomeDiv imageBanner={shirts} title={'Jordan'} redirectTo={'products/jerseys'}/>

            <HomeDiv imageBanner={sneakers} title={'Giannis'} redirectTo={'products/sneakers'}/>

            <HomeDiv imageBanner={collection} title={'Todos los productos'} two_row={true} redirectTo={'products/shorts'}/>
        </section>
     );
}

export default HomeSection;
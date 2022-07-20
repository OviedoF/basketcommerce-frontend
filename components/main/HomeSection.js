import styles from './HomeSection.module.scss';
import HomeDiv from './HomeDiv';
import AddCategoryIcon from '../admin/categorys/AddCategoryIcon';
import { useSelector } from 'react-redux';

function HomeSection({categorys}) {
    const auth = useSelector(state => state.auth);
    console.log(categorys)

    return ( 
        <section className={styles.grid_container}>
            {categorys.map(el => (
                <HomeDiv 
                    imageBanner={el.imageUrl} 
                    title={el.name} 
                    redirectTo={el.name === "todos los productos" ? 'products' : `products/${el.name}`} 
                />
            ))}

            {auth ? <AddCategoryIcon /> : ''}
        </section>
     );
}

export default HomeSection;
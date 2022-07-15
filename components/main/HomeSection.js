import styles from './HomeSection.module.scss';
import HomeDiv from './HomeDiv';
import AddCategoryIcon from '../admin/categorys/AddCategoryIcon';
import { useSelector } from 'react-redux';

function HomeSection({categorys}) {
    const auth = useSelector(state => state.auth);
    console.log(auth);

    return ( 
        <section className={styles.grid_container}>
            {categorys.map(el => (
                <HomeDiv imageBanner={el.imageUrl} title={el.name} redirectTo={`products/${el.name}`} />
            ))}

            {/* <HomeDiv imageBanner={shirts} title={'Jordan'} redirectTo={'products/jerseys'}/>

            <HomeDiv imageBanner={sneakers} title={'Giannis'} redirectTo={'products/giannis'}/>

            <HomeDiv imageBanner={collection} title={'Todos los productos'} two_row={true} redirectTo={'products/shorts'}/> */}

            {auth ? <AddCategoryIcon /> : ''}
        </section>
     );
}

export default HomeSection;
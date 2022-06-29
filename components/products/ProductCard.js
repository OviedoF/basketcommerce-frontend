import styles from './ProductCard.module.scss';

function ProductCard({product}) {
    return ( 
        <div className={styles.card}>

            <img src={product.imgUrl} alt={product.name} />

            <div className={styles.description}>
                <h2>{product.name}</h2>
                <p>{product.description}</p>
                <p>€{product.price}</p>
            </div>

        </div>
    );
}

export default ProductCard;
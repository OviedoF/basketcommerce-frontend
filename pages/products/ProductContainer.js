import React, { useState, useEffect } from 'react';
import ProductCard from "../../components/products/ProductCard";
import styles from './ProductContainer.module.scss';

function ProductContainer({products}) {
    console.log(products);

    return ( 
        <div className={styles.cardContainer}>
            {products.map((el) => {
                return <ProductCard product={el} key={el.id}/>
            })}
        </div>
     );
}

export default ProductContainer;
import React from 'react'
import styles from './ProductCard.module.scss';

export default function ProductCard({product}) {
  return (
    <div className={styles.card}>
        <div className={styles.imgBx}>
            <img src={product.imagesUrls[7]} alt="" srcSet="" />
            <h2>{product.name}</h2>
        </div>

        
        <div className={styles.content_container}>
            <div className={styles.content_hidder}>
                <div className={styles.contentBx}>
                    <div className={styles.size}>
                        <h3>Size : </h3>
                        {product.sizes.map(el => {
                            return <span>{el}</span>
                        })}
                        {/* <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                        <span>10</span>
                        <span>10</span>
                        <span>10</span>
                        <span>10</span>
                        <span>10</span>
                        <span>10</span>
                        <span>10</span> */}
                    </div>

                    <button className={styles.link}>
                        <a href="">Ver más</a>
                    </button>
                </div>
            </div>
        </div>
    </div>
    
  )
}

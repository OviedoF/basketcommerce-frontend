import React from 'react'
import styles from './ProductCard.module.scss';

export default function ProductCard() {
  return (
    <div className={styles.card}>
        <div className={styles.imgBx}>
            <img src="https://static.nike.com/a/images/t_default/e17c545f-13a3-4839-8789-858b8851c665/calzado-de-b%C3%A1squetbol-giannis-immortality-Z6fb1C.png" alt="" srcset="" />
            <h2>Nike Shoes</h2>
        </div>

        
        <div className={styles.content_container}>
            <div className={styles.content_hidder}>
                <div className={styles.contentBx}>
                    <div className={styles.size}>
                        <h3>Size : </h3>
                        <span>7</span>
                        <span>8</span>
                        <span>9</span>
                        <span>10</span>
                        <span>10</span>
                        <span>10</span>
                        <span>10</span>
                        <span>10</span>
                        <span>10</span>
                        <span>10</span>
                        <span>10</span>
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

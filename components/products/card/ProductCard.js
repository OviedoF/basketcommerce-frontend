import React from 'react'
import styles from './ProductCard.module.scss';
import Image from 'next/image';
import Link from 'next/dist/client/link';
import { useRouter } from 'next/router';

export default function ProductCard({product}) {
    const router = useRouter();

    return (
        <div className={styles.card}>
            <div className={styles.imgBx}>
                <Image src={product.imagesUrls[7]} alt={product.name + 'image'} width={500} height={400}/>
                <h2>{product.name}</h2>
            </div>

            
            <div className={styles.content_container}>
                <div className={styles.content_hidder}>
                    <div className={styles.contentBx}>
                        <div className={styles.size}>
                            {product.sizes.map(el => {
                                return <span key={el}>{el}</span>
                            })}
                        </div>

                        <button className={styles.link}>
                            <Link href={`${router.asPath}/${product._id}`}>Ver más</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

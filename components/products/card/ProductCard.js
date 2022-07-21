import React from 'react'
import styles from './ProductCard.module.scss';
import Image from 'next/image';
import Link from 'next/dist/client/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import AdminIcons from './AdminIcons';

export default function ProductCard({product, setIsLoading, setError, setSuccess, isGeneral}) {

    const router = useRouter();
    const auth = useSelector(state => state.auth);
    return (
        <div className={styles.card}>
            {product.priceWithOffer 
                ? <div className={styles.priceContainer}>
                    <p className={styles.offer}>${product.priceWithOffer}</p>   
                    <p className={styles.price}>${product.price}</p>
                  </div>
                : <p className={styles.priceWithoutOffer}>${product.price}</p>
            }

            <div className={styles.imgBx}>
                <Image src={product.imagesUrls[product.imagesUrls.length - 1]} alt={product.name + 'image'} width={500} height={400}/>
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
                            <Link 
                            href={isGeneral ? `${router.asPath}/${product.category.toLowerCase()}/${product._id}` : `${router.asPath}/${product._id}`}>
                                Ver más
                            </Link>
                        </button>
                    </div>
                </div>
            </div>

            {auth ? <AdminIcons product={product} setIsLoading={setIsLoading} setError={setError} setSuccess={setSuccess}/> : ''}
        </div>
        
    )
}

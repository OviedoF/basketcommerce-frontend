import data from '../../assets/products.json';
import React, { useState, useEffect } from 'react';
import styles from './SizeFormContainer.module.scss';

function SizeFormContainer({isActive, setIsActive}) {
    const [sizes, setSizes] = useState([]);

    useEffect(() => {
        const sizesMapped = [];

        data.forEach(el => {
            el.size.forEach(individualSize => {
                if(!sizesMapped.includes(individualSize)){
                    sizesMapped.push(individualSize);
                }
            });
        });

        setSizes(sizesMapped);
    }, []);

    return ( 
        <div className={styles.FormContainer} style={isActive ? {top: '100%', opacity: '1', zIndex: 0} : {top: '0', opacity: '0', zIndex: '-1'}} onMouseLeave={() => setIsActive(false)}>
            {sizes.map(el => {
                return <div>
                    <p key={el}>{el}</p>
                </div>
            })}
        </div>
     );
}

export default SizeFormContainer;
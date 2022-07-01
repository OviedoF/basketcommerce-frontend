import data from '../../assets/products.json';
import React, { useState, useEffect } from 'react';
import styles from './ColorFormContainer.module.scss';

function ColorFormContainer({isActive, setIsActive}) {
    const [colors, setColors] = useState([]);


    useEffect(() => {
        const colorsMapped = [];

        data.forEach(el => {
            if(!colorsMapped.includes(el.color)){
                colorsMapped.push(el.color)
            } 
        });

        setColors(colorsMapped);
    }, []);

    return ( 
        <div className={styles.ColorContainer} style={isActive ? {top: '100%', opacity: '1', zIndex: 0} : {top: '0', opacity: '0', zIndex: '-1'}} onMouseLeave={() => setIsActive(false)}>
            {colors.map(el => {
                return <button active={'false'} key={el}>
                    <div className={styles[el]}/>
                    <span>{el}</span>
                </button>
            })}
        </div>
    );
}

export default ColorFormContainer;
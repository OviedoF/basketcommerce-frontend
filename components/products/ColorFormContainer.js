import React, { useState, useEffect } from 'react';
import styles from './ColorFormContainer.module.scss';
import ButtonDesign from '../ButtonDesign';

function ColorFormContainer({isActive, setIsActive, color, setColor, products}) {
    const [colors, setColors] = useState([]);

    useEffect(() => {
        const colorsMapped = [];

        products.forEach(el => {
            if(!colorsMapped.includes(el.color)){
                colorsMapped.push(el.color)
            } 
        });

        setColors(colorsMapped);
    }, []);

    return ( 
        <div className={styles.ColorContainer} style={isActive ? {top: '100%', opacity: '1', zIndex: 0} : {top: '0', opacity: '0', zIndex: '-1'}} onMouseLeave={() => setIsActive(false)}>
            {colors.map(el => {
                return (
                <button active={'false'} key={el} onClick={(e) => setColor(el)}>
                    <div className={styles[el]}/>
                    <span>{el}</span>
                </button>
                )
            })}
            
            <button active={'false'} onClick={(e) => setColor(false)}>
                <div className={styles.grey}/>
                <span>{'Sin filtro'}</span>
            </button>
            
        </div>
    );
}

export default ColorFormContainer;
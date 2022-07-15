import React, { useState, useEffect } from 'react';
import styles from './SizeFormContainer.module.scss';
import { useRef } from 'react';

function SizeFormContainer({isActive, setIsActive, sizesActive, setSizesActive, products}) {
    const [sizes, setSizes] = useState([]);
    const father = useRef();

    useEffect(() => {
        const sizesMapped = [];

        products.forEach(el => {
            el.sizes.forEach(individualSize => {
                if(!sizesMapped.includes(individualSize)){
                    sizesMapped.push(individualSize);
                }
            });
        });

        sizesMapped.sort(function(a, b){return a - b}); // --> 3, 12, 23

        setSizes(sizesMapped);
    }, []);

    useEffect(() => {
        const items = [];
        father.current.childNodes.forEach(el => items.push(el.firstChild));
        
        items.forEach(el => {
            if(sizesActive.includes(parseInt(el.innerText))){
                el.classList.add(styles.active);
            } else {
                el.classList.remove(styles.active);
            }
        })
    }, [sizesActive]);

    const handleSizesActive = (e) => {
        const num = parseInt(e.target.innerText);
        
        if(!sizesActive.includes(num)){
            setSizesActive([...sizesActive, num]);
        } else{
            const sizesActiveFilter = sizesActive.filter(el => el !== num);
            setSizesActive(sizesActiveFilter);
        }
    }

    return ( 
        <div ref={father} className={styles.FormContainer} style={isActive ? {top: '100%', opacity: '1', zIndex: 2} : {top: '0', opacity: '0', zIndex: '-1'}} onMouseLeave={() => setIsActive(false)}>
            {sizes.map(el => {
                return <div key={el}>
                    <span onClick={(e) => handleSizesActive(e)} >{el}</span>
                </div>
            })}
        </div>
     );
}

export default SizeFormContainer;
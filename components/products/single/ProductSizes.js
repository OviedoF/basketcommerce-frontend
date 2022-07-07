import React from 'react'
import { v4 as uuidv4 } from 'uuid';

export default function ProductSizes({productSizes, setSizeSelected, sizeSelected}) {
    const sizes = [36, 37, 38, 39, 40, 41, 42 ,43, 44, 45, 46, 47];

    const sendSize = (e) => {
        setSizeSelected(e.target.value);

        const allContainers = e.target.parentNode.childNodes;

        allContainers.forEach(element => {
            if(element.classList.contains('active')){
                console.log(element);
            }
        });

        e.target.classList.add('active');
    }

  return (
    <ul>
    {sizes.map(el => {
            if(productSizes.includes(JSON.stringify(el))) {
                return <li 
                key={uuidv4()} 
                value={el} 
                className={el == JSON.stringify(sizeSelected) ? 'contain active' : 'contain'} 
                onClick={(e) => sendSize(e)}>
                    {el}
                </li>
            }

            return <li key={el}>{el}</li>
        })}
        
        <style jsx>{`
        ul{
                margin-top: 30px;
                list-style: none;
                display: flex;
                width: 100%;
                flex-wrap: wrap;
            }

            ul li{
                width: 60px;
                margin: 5px;
                height: 60px;
                display: flex;
                align-items: center;
                justify-content: center;
                background-color: #00000030;
                color: #00000050;
                border-radius: 10px;
            }

            ul li:hover{
                border: 1px solid grey;
            }

            ul li.contain{
                color: inherit;
                cursor: pointer;
            }

            ul li.contain:hover{
                border: 1px solid white;
            }

            ul li.active{
                background: #99999989;
                border:1px solid white;
            }
        `}</style>
    </ul>

    
  )
}

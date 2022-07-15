import React from 'react'

export default function ProductQuantity({quantity, handleQuantity}) {

  return (
    <div className="quantity">
        <p>
            <span onClick={(e) => handleQuantity('resta')}>-</span> 
            {quantity}
            <span onClick={(e) => handleQuantity('suma')}>+</span>
        </p>

        <style jsx>{`
            .quantity{
                width: 7%;
            }

            p{
                display: flex;
                width: 100%;
                justify-content: space-between;
                align-items: center;
            }

            span{
                cursor: pointer;
                font-weight: bold;
                font-size: 20px;
            }
        `}</style>
    </div>
  )
}

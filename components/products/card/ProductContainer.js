import React, { useState, useEffect } from 'react';
import ProductCard from "./ProductCard";

function ProductContainer({products}) {
    console.log(products);

    return ( 
        <div className="cardContainer">
            {products.map(el => {
                return <ProductCard product={el}/>
            })}

            <style jsx>{`
                .cardContainer{
                    display: flex;
                    flex-wrap: wrap;
                    width: 100%;
                    height: 100%;
                }
            `}</style>
        </div>
     );
}

export default ProductContainer;
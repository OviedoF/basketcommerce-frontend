import React, { useState, useEffect } from 'react';
import ProductCard from "./ProductCard";

function ProductContainer({products}) {
    console.log(products);

    return ( 
        <div className="cardContainer">
            <ProductCard/>

            <style jsx>{`
                .cardContainer{
                    margin-top: 60px;
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
import React, { useEffect } from 'react';
import ProductCard from "./ProductCard";
import { useDispatch } from 'react-redux';
import { change_icon_nav } from '../../../src/actions/handleNavActions';

function ProductContainer({products}) {
    console.log(products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( change_icon_nav('products') );
    }, []);

    return ( 
        <div className="cardContainer">
            {products.map(el => {
                return <ProductCard product={el} key={el._id}/>
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
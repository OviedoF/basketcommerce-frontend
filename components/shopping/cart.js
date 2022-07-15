import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux'
import ProductCartCard from './product-cart-card';
import NoItemsFound from './NoItemsFound';

export default function Cart() {
    const shoppingCart = useSelector(state => state.shoppingCart);
    console.log(shoppingCart);

  return (
    <div>
        {shoppingCart.length === 0 
        ? 
            <NoItemsFound />
        : shoppingCart.map(el => (
            <ProductCartCard product={el} key={uuidv4()}/>
        ))}

        <style jsx>{`
            div{
                width: 50%;
            }
        `}</style>
    </div>
  )
}

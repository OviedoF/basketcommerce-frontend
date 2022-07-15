import React from 'react'
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { change_icon_nav } from "../../src/actions/handleNavActions";
import Cart from '../../components/shopping/cart';

export default function ShoppingCart() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch( change_icon_nav('shopping_cart') );
  }, []);

  return (
    <main>
      <Cart />

      <style jsx>{`
        main{
          display: flex;
          align-items: center;
          justify-content: center; 
        }    
      `}</style>
    </main>
  )
}

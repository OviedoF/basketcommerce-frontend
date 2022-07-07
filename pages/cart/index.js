import React from 'react'
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { change_icon_nav } from "../../src/actions/handleNavActions";

export default function ShoppingCart() {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch( change_icon_nav('shopping_cart') );
  }, []);

  return (
    <div>ShoppingCart</div>
  )
}

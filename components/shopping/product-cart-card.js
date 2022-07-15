import Image from 'next/image'
import React, {useState} from 'react'
import ProductCartCardImage from './ProductCartCardImage'
import ProductCartCardName from './ProductCartCardName'
import ProductQuantity from './ProductQuantity'

export default function ProductCartCard({product}) {
  const [quantity, setQuantity] = useState(2);
  const [price, setPrice] = useState(product.price);

  const handleQuantity = async (type) => {
    if(type == 'suma'){
      await setQuantity(quantity + 1);
      setPrice(product.price * quantity);
    } else {
      await setQuantity(quantity - 1);
      setPrice(product.price * quantity);
    }
  }

  return (
    <div className='card'>
        <ProductCartCardImage imgs={product.imgs} />

        <ProductCartCardName name={product.name} color={product.color} category={product.category} size={product.size}/>

        <ProductQuantity handleQuantity={handleQuantity} quantity={quantity - 1}/>

        <h3>${price}</h3>

        <style jsx>{`
            .card{
                margin-top: 50px;
                display: flex;
                align-items: center;
                justify-content: space-evenly;
                width: 100%; 
                box-shadow: rgba(0, 0, 0, 0.06) 0px 3px 5px;
                color: inherit;
            }    
        `}</style>
    </div>
  )
}


import ButtonDesign from '../../ButtonDesign';
import { useDispatch } from 'react-redux';
import { agregarProducto } from '../../../src/actions/shoppingCartActions';
import React, { useState } from 'react';
import ProductSizes from './ProductSizes';
import DoneMessage from '../../DoneMessage';
import ErrorMessage from '../../ErrorMessage';

export default function ProductDetails({product}) {
    const [sizeSelected, setSizeSelected] = useState(undefined);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    const sendToCart = async () => {
        setSuccess(false);
        setError(false);

        if(sizeSelected !== undefined) {
            const productToSend = {
                name: product.name,
                price: product.price,
                size: sizeSelected,
                category: product.category,
                imgs: product.imagesUrls,
                color: product.color
            }

            dispatch( agregarProducto(productToSend) );

            setSuccess(true);
        } else {
            setError(true);
        }
        
    }

  return (
    <div className='details'>
        <h2>{product.name}</h2>
        <p className='category'>{product.category}</p>
        <p className='price'>${product.price}</p>

        <p className='description'>{product.description}</p>

        <ProductSizes productSizes={product.sizes} setSizeSelected={setSizeSelected} sizeSelected={sizeSelected}/>

        <ButtonDesign text={'Añadir al carrito'} action={sendToCart}/>

        {success ? <DoneMessage type={'Producto'}/> : ''}
        {error ? <ErrorMessage message={'Por favor, elija un talle.'}/> : ''}

        <style jsx>{`
            .details{
                width: 40%;
                padding: 10px
            }

            h2{
                width: 100%;
                text-align: left;
                font-size: 250%;
            }

            p.category{
                font-size: 28px;
                font-style: italic;
            }

            .description{
                margin-top: 30px;
                font-size: 19px;
                
            }
            
            button{
                background: #F96D00;
                border: none;
                margin-top: 50px;
                padding: 20px 60px;
                border-radius: 50px;
                color: inherit;
                cursor: pointer;
                box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;
                font-size: 18px;
            }
        `}</style>
    </div>
  )
}

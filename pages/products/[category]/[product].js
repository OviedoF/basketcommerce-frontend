import { useRouter } from 'next/dist/client/router'
import ImagesContainer from '../../../components/products/single/ImagesContainer';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductDetails from '../../../components/products/single/ProductDetails';

export default function SingleProductPage({product}) {
    var router = useRouter();

    return (
        <main>
            <ImagesContainer images={product.imagesUrls}/>
            <ProductDetails product={product}/>

            <style jsx>
                {`
                    main{
                        padding:30px;
                        width: 91%;
                        display: flex;
                    }
                `}
            </style>
        </main>
    )
}

export async function getServerSideProps(context){

    const dataProduct = await axios(`https://basket-commerce-api.herokuapp.com/api/products/${context.params.product}`)
        .then(response => response.data)
        .catch(err => console.log(err));
   
    return {
        props: {
            product: dataProduct
        }
    };
}
import React from 'react'
import ProductEdit from '../../../components/products/edit/ProductEdit'
import axios from 'axios';

export default function EditProductPage({product}) {
  return (
    <main>
        <ProductEdit product={product}/>

        <style jsx>{`
            main{
                display:flex;
                align-items:center;
                justify-content: center;
            }
        `}</style>
    </main>
  )
}

export async function getServerSideProps(context){
    const product = await axios(`http://localhost:4000/api/products/${context.params.id}`)
        .then(response => response.data)
        .catch(err => console.log(err));
   
    return {
        props: {
            product
        }
    };
  }
  
  
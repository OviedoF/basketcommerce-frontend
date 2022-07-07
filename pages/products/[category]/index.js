import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react';
import ProductContainer from "../../../components/products/card/ProductContainer";
import FormContainer from "../../../components/products/FormContainer";
import axios from "axios";

function ProductsPage({resProducts}) {
    const router = useRouter();

    const [products, setProducts] = useState([]);

    const productsFinded = router.query.category.charAt(0).toUpperCase() + router.query.category.slice(1);

    useEffect(() => {
        const filterProducts = resProducts.filter((el) => {
            if(el.category === productsFinded){
                return el
            } 
        })

        setProducts(filterProducts);
    }, []);

    return ( 
        <main>
            <style jsx>
                {`
                    main{
                        overflow-y: scroll;
                    }
                    
                    /* Estilos para motores Webkit y blink (Chrome, Safari, Opera... )*/
                    
                    main::-webkit-scrollbar {
                        -webkit-appearance: none;
                    }
                    
                    main::-webkit-scrollbar:vertical {
                        width:10px;
                    }
                    
                    main::-webkit-scrollbar-button:increment,main::-webkit-scrollbar-button {
                        display: none;
                    } 
                    
                    main::-webkit-scrollbar:horizontal {
                        height: 10px;
                    }
                    
                    main::-webkit-scrollbar-thumb {
                        background-color: #79797970;
                        border-radius: 50px;
                    }
                `}
            </style>

            <FormContainer />
            <ProductContainer products={products}/>
        </main>
     );
}

export async function getServerSideProps(){
    const resProducts = await axios('http://localhost:4000/api/products')
        .then(response => response.data)
        .catch(err => console.log(err));
   
    return {
        props: {
            resProducts
        }
    };
}

export default ProductsPage;
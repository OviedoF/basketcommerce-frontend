import Product from "../../components/products/card/ProductContainer";
import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react';
import data from '../../assets/products.json';
import ProductContainer from "../../components/products/card/ProductContainer";
import FormContainer from "../../components/products/FormContainer";

function ProductsPage() {
    const router = useRouter();

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const filterProducts = data.filter((el) => {
            if(el.category === router.query.product){
                return el
            } 
        })

        setProducts(filterProducts);
    }, []);

    console.log(products);

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

export default ProductsPage;
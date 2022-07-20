import React, { useState, useEffect } from 'react';
import ProductContainer from "../../../components/products/card/ProductContainer";
import FormContainer from "../../../components/products/FormContainer";
import axios from "axios";

function ProductsPage({resProducts}) {
    const [color, setColor] = useState(false);
    const [sizesActive, setSizesActive] = useState([]);

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

            <FormContainer 
                color={color} 
                setColor={setColor} 
                products={resProducts}
                sizesActive={sizesActive}
                setSizesActive={setSizesActive}
            />

            <ProductContainer 
                products={resProducts} 
                color={color}
                sizesActive={sizesActive}
            />
        </main>
    );
}

export async function getServerSideProps(context){
    console.log(`http://localhost:4000/api/products/category/${context.params.category}`);

    const resProducts = await axios(`http://localhost:4000/api/products/category/${context.params.category}`)
        .then(response => response.data)
        .catch(err => console.log(err));
   
    return {
        props: {
            resProducts
        }
    };
}

export default ProductsPage;
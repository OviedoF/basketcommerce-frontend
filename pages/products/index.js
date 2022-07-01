import Product from "../../components/products/card/ProductContainer";
import { useRouter } from "next/router";
import React, { useState, useEffect } from 'react';
import data from '../../assets/products.json';

function ProductsPage() {

    const [products, setProducts] = useState(data);

    return ( 
        <main>
            <Product products={products}/>
        </main>
     );
}

export default ProductsPage;
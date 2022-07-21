import React, { useEffect, useState } from 'react';
import ProductCard from "./ProductCard";
import { useDispatch } from 'react-redux';
import { change_icon_nav } from '../../../src/actions/handleNavActions';
import Spinner from '../../loading/spinner/Spinner';
import ErrorMessage from '../../ErrorMessage';
import DoneMessage from '../../DoneMessage';

function ProductContainer({products, color, sizesActive, isGeneral}) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);
    console.log(products);
    const dispatch = useDispatch();
    const [productsRender, setProductsRender] = useState(products);

    useEffect(() => {
        dispatch( change_icon_nav('products') );
    }, []);

    useEffect(() => {
        let productsFinded = [];

        if(sizesActive.length > 0) {
            const productsFindedBySizes = [];
            
            products.forEach(el => {
                for (let index = 0; index < el.sizes.length; index++) {

                    const element = el.sizes[index];

                    if(sizesActive.includes(parseInt(element))){
                        productsFindedBySizes.push(el);
                        break;
                    }
                }
            })

            productsFinded = productsFindedBySizes;
        } else {
            productsFinded = products;
        }
        
        if(color){
            const productsFindedByColor = productsFinded.filter(el => el.color === color);
            productsFinded = productsFindedByColor;
        }

        setProductsRender(productsFinded);

    }, [sizesActive, color]);

    return ( 
        <div className="cardContainer">
            {productsRender.map(el => {
                return <ProductCard 
                    product={el} 
                    key={el._id} 
                    setIsLoading={setIsLoading} 
                    setError={setError} 
                    setSuccess={setSuccess}
                    isGeneral={isGeneral}
                />
            })}

            <style jsx>{`
                .cardContainer{
                    display: flex;
                    flex-wrap: wrap;
                    width: 96%;
                    justify-content: center;
                    padding-bottom: 35px;
                }
            `}</style>

            {isLoading ? <Spinner speed={1.3}/> : ''}
            {error ? <ErrorMessage message={''}/> : ''}
            {success ? <DoneMessage type={'Eliminación'}/> : ''}
        </div>
     );
}

export default ProductContainer;
import React from 'react'
import { useState } from 'react'
import ProductEditData from './ProductEditData'
import AddFormSpecs from '../add/AddFormSpecs';
import styles from './ProductEdit.module.scss';
import axios from 'axios';
import ErrorMessage from '../../ErrorMessage';
import DoneMessage from '../../DoneMessage';
import Spinner from '../../loading/spinner/Spinner';

export default function ProductEdit({product, nameApi}) {
    const [form, setForm] = useState({});
    const [sizes, setSizes] = useState([]);
    const [error, setError] = useState(false);
    const [done, setDone] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    
    const handleChange = (e) => {
        if(e.target.name == 'category'){
            const categoryCapitalize = e.target.value.charAt(0).toUpperCase() + e.target.value.slice(1);

            setForm({
                ...form, 
                [e.target.name]: categoryCapitalize
            })
        } else {
            setForm({
                ...form, 
                [e.target.name]: e.target.value
            })
        }
    }

    const handleSizes = (e) => {
        e.target.active = !e.target.active;

        if(e.target.active) {
            setSizes([...sizes, parseInt(e.target.name)]);
        } else{
            const filtered = sizes.filter(el => el !== parseInt(e.target.name));
            setSizes(filtered)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const data = new FormData();
    
        data.append('name', form.name || product.name);
        data.append('price', form.price || product.price);
        data.append('category', form.category || product.category);
        data.append('priceWithOffer', form.priceWithOffer);

        sizes.forEach(el => {
            data.append('sizes', el)
        })
        
        data.append('description', form.description || product.description);
    
        setDone(false);
        setError(false);
        setIsLoading(true);

        await axios.put(`http://localhost:4000/api/products/${product._id}`, data)
            .then(response =>{ 
                console.log(response.data);
                setDone(true);
            })
            .catch(error => {
                setError(true);
                console.log(error);
            });
        
        setIsLoading(false);
    }

  return (
    <form className={styles.editForm} onSubmit={handleSubmit}>
        <ProductEditData handleChange={handleChange} product={product}/>

        <AddFormSpecs handleChange={handleChange} handleSizes={handleSizes} product={product} edit={true} description={product.description}/>

        {error ? <ErrorMessage message={error} setError={setError}/> : ''}
        {done ? <DoneMessage type={'Producto'}/> : ''}
        {isLoading ? <Spinner speed={1.3} id={styles.loading_component}/> : ''}
    </form>
  )
}

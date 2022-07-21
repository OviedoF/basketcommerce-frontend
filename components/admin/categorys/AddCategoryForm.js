import styles from './AddCategory.module.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../../loading/spinner/Spinner';
import DoneMessage from '../../DoneMessage';
import ErrorMessage from '../../DoneMessage';

export default function AddCategoryForm() {

    const [data, setData] = useState({});
    const [error, setError] = useState(false);
    const [done, setDone] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) => {
        if(e.target.type == 'file'){
            setData({
                ...data,
                [e.target.name]: e.target.files
            })
        } else {
            setData({
                ...data,
                [e.target.name]: e.target.value
            })
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = new FormData();

        form.append('name', data.name.toLowerCase());
        form.append('image', data.image[0]);

        setIsLoading(true);
        setDone(false);
        setError(false);

        axios.post('https://basket-commerce-api.herokuapp.com/api/categorys', form)
            .then((res) => {
                setDone(true);
            })
            .catch(err => setError(true));
        
        setIsLoading(false);
    }

  return (
    <form className={styles.form} onSubmit={(e) => handleSubmit(e)}>
        <input 
            type="text" 
            name="name" 
            placeholder='Nombre de la categoría'
            onChange={(e) => handleChange(e)}
        />
        <input 
            type="file" 
            name="image"
            onChange={(e) => handleChange(e)}
        />

        <input type="submit" value="Enviar" style={{cursor: 'pointer'}}/>

        {error ? <ErrorMessage message={error} setError={setError}/> : ''}
        {done ? <DoneMessage type={'Producto'}/> : ''}
        {isLoading ? <Spinner speed={1.3} id={styles.loading_component}/> : ''}
    </form>
  )
}

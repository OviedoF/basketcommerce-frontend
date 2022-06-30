import axios from 'axios';
import React, { useState, useEffect } from 'react';
import ErrorMessage from '../../ErrorMessage';
import styles from './AddForm.module.scss';
import AddFormData from './AddFormData';
import AddFormSpecs from './AddFormSpecs';
import DoneMessage from '../../DoneMessage';

export default function AddForm() {
    const [form, setForm] = useState({});
    const [sizes, setSizes] = useState([]);
    const [error, setError] = useState(false);
    const [done, setDone] = useState(false);
    
    const handleChange = (e) => {
        if(e.target.type == 'file'){
            setForm({
                ...form,
                [e.target.name]: e.target.files
            })
        } else {
            setForm({
                ...form, 
                [e.target.name]: e.target.value
            })
        }

        console.log(form);
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
    
        data.append('name', form.name);
        data.append('price', form.price);
        data.append('category', form.category);
        // data.append('image', form.image);
        data.append('color', form.color);

        for (let index = 0; index < form.images.length; index++) {
            data.append('image', form.images[index])
        }

        sizes.forEach(el => {
            data.append('sizes', el)
        })
        
        data.append('description', form.description);
    
        await axios.post('http://localhost:4000/api/products', data)
            .then(response =>{ 
                console.log(response.data);
                setDone(true);
            })
            .catch(error => {
                setError(error.request.responseText)
                console.log(error)
            });
    }
    
    return (
        <form method='POST' encType='' className={styles.addForm} onSubmit={(e) => handleSubmit(e)}>
            <AddFormData handleChange={handleChange} />

            <AddFormSpecs handleChange={handleChange} handleSizes={handleSizes}/>

            {error ? <ErrorMessage message={error} setError={setError}/> : ''}
            {done ? <DoneMessage /> : ''}
            
        </form>
    )
}

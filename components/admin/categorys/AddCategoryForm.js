import styles from './AddCategory.module.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function AddCategoryForm() {

    const [data, setData] = useState({});

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

        console.log(form);

        axios.post('http://localhost:4000/api/categorys', form)
            .then((res) => console.log(res.data))
            .catch(err => console.log(err));
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

        <input type="submit" value="Enviar" />
    </form>
  )
}

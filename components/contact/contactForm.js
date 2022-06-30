import styles from './contactForm.module.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ContactForm() {
    const [other, setOther] = useState(false);
    const [form, setForm] = useState({});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    };

    const handleTypeRequest = (e) =>{
        e.target.value === 'otro' ? setOther(true) : setOther(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const f = new FormData;

        f.append('name', form.name);
        f.append('email', form.email);
        f.append('typeQuery', form.typeQuery);
        f.append('customQuery', form.customQuery);
        f.append('details', form.details);

        axios.post('http://localhost:4000/api/comments', f)
            .then(res => console.log(res))
            .catch(err => console.error(err));
    }

    return ( 
        <form className={styles.form} onSubmit={(e ) => handleSubmit(e)}>
            <input type="text" name="name" placeholder="Escribe tu nombre" onChange={(e) => handleChange(e)}/>
            <input type="email" name="email" placeholder="E-Mail" onChange={(e) => handleChange(e)}/>

            <select name="typeQuery" id="request" onChange={(e) => { handleTypeRequest(e); handleChange(e);}}>
                <option value="reembolso">Quiero reembolsar un pedido</option>
                <option value="encargo">Quiero encargar un pedido</option>
                <option value="problema con envio">Tengo problemas con el envío</option>
                <option value="otro">Otro...</option>
            </select>

            {other ? <input type="text" name="customQuery" placeholder='Especifique' onChange={(e) => handleChange(e)}/> : ''}

            <textarea name="details" id="description" cols="30" rows="10" placeholder="Detalle su pedido" onChange={(e) => handleChange(e)} ></textarea>
            
            <input type="submit" value="Enviar" />
        </form>
     );
}

export default ContactForm;
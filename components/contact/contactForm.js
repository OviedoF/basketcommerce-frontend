import styles from './contactForm.module.scss';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Spinner from '../loading/spinner/Spinner';
import DoneMessage from '../DoneMessage';
import ErrorMessage from '../ErrorMessage';
import { useRef } from 'react';

function ContactForm() {
    const [other, setOther] = useState(false);
    const [form, setForm] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);
    const customQuery = useRef();

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleTypeRequest = (e) =>{
        e.target.value === 'otro' ? setOther(true) : setOther(false);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const f = new FormData;

        f.append('name', form.name);
        f.append('email', form.email);
        f.append('typeQuery', form.typeQuery);
        f.append('customQuery', form.customQuery);
        f.append('details', form.details);

        setIsLoading(true);
        setError(false);
        setSuccess(false);

        await axios.post('http://localhost:4000/api/comments', f)
            .then(res => {
                console.log(res)
                setSuccess(true);
            })
            .catch(err => {
                console.log(err);
                setError(true);
            });

        if(customQuery.current === undefined || customQuery.current == null) {
            setIsLoading(false);
            return;
        }

        customQuery.current.value = null;
        setIsLoading(false);
    }

    return ( 
        <form className={styles.form} onSubmit={(e ) => handleSubmit(e)}>
            <input type="text" name="name" placeholder="Escribe tu nombre" onChange={(e) => handleChange(e)}/>
            <input type="email" name="email" placeholder="E-Mail" onChange={(e) => handleChange(e)}/>

            <select name="typeQuery" id="request" onChange={(e) => { handleTypeRequest(e); handleChange(e);}}>
                <option value="undefined">Seleccione el tipo de consulta</option>
                <option value="reembolso">Quiero reembolsar un pedido</option>
                <option value="encargo">Quiero encargar un pedido</option>
                <option value="problema con envio">Tengo problemas con el envío</option>
                <option value="otro">Otro...</option>
            </select>

            {other ? <input type="text" name="customQuery" placeholder='Especifique' ref={customQuery} onChange={(e) => handleChange(e)}/> : ''}

            <textarea name="details" id="description" cols="30" rows="10" placeholder="Detalle su pedido" onChange={(e) => handleChange(e)} ></textarea>
            
            <input type="submit" value="Enviar" />

            {success ? <DoneMessage type='Mensaje'/> : ''}
            {error ? <ErrorMessage /> : ''}
            {isLoading ? <Spinner speed={1.3} id={styles.loading_component}/> : ''}
        </form>
     );
}

export default ContactForm;
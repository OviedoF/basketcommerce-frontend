import styles from './contactForm.module.scss';
import React, { useState, useEffect } from 'react';

function ContactForm() {
    const [other, setOther] = useState(false);

    const handleTypeRequest = (e) =>{
        e.target.value === 'otro' ? setOther(true) : setOther(false);
    }

    return ( 
        <form className={styles.form}>
            <input type="text" name="name" placeholder="Escribe tu nombre"/>
            <input type="email" name="email" placeholder="E-Mail" />

            <select name="request" id="request" onChange={(e) => handleTypeRequest(e)}>
                <option value="reembolso">Quiero reembolsar un pedido</option>
                <option value="encargo">Quiero encargar un pedido</option>
                <option value="problema con envio">Tengo problemas con el envío</option>
                <option value="otro">Otro...</option>
            </select>

            {other ? <input type="text" name="typeRequest" placeholder='Especifique'/> : ''}

            <textarea name="description" id="description" cols="30" rows="10" placeholder="Detalle su pedido"></textarea>
            
            <input type="submit" value="Enviar" />
        </form>
     );
}

export default ContactForm;
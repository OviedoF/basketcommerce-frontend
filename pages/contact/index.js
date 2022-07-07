import ContactForm from "../../components/contact/contactForm";
import styles from './index.module.scss';
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { change_icon_nav } from "../../src/actions/handleNavActions";

function Contact() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( change_icon_nav('contact_form') );
    }, []);

    return ( 
        <main className={styles.main}>
            <ContactForm />
        </main>
     );
}

export default Contact;
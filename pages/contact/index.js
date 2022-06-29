import ContactForm from "../../components/contact/contactForm";
import styles from './index.module.scss';

function Contact() {
    return ( 
        <main className={styles.main}>
            <ContactForm />
        </main>
     );
}

export default Contact;
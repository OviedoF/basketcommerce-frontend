import React, {useRef} from 'react'
import { admin_login } from '../../../src/actions/authActions';
import ButtonDesign from '../../ButtonDesign';
import styles from './AdminForm.module.scss';

export default function AdminForm({dispatch, setError, setSuccess}) {
    const inputName = useRef();
    const inputPassword = useRef();

    const login = () => {
        setError(false);
        setSuccess(false);

        if (inputName.current.value === 'admin@ebasquet.com' && inputPassword.current.value === 'admin') {
          dispatch( admin_login() );
          setSuccess(true);
        } else{
          setTimeout(() => {
            setError(true);
          }, 500);
        }
    }

  return (
    <form className={styles.form}>
        <input type="text" name="name" ref={inputName} placeholder={'usuario'}/>
        <input type="password" name="password" ref={inputPassword} placeholder='contraseña'/>
        
        <ButtonDesign text={"Entrar"} action={login}/>
    </form>
  )
}

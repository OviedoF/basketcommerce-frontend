import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { change_icon_nav } from '../../src/actions/handleNavActions';
import AdminForm from '../../components/admin/form/AdminForm';
import ErrorMessage from '../../components/ErrorMessage';
import SuccessMessage from '../../components/DoneMessage';
import AdminPanel from '../../components/admin/panel/AdminPanel';

export default function AdminPage() {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const auth = useSelector(state => state.auth);

  const dispatch = useDispatch();

  useEffect(() => {
      dispatch( change_icon_nav('admin_login') );
  }, []);

  return (
    <main>
      {auth ? <AdminPanel /> : <AdminForm dispatch={dispatch} setError={setError} setSuccess={setSuccess}/>}

      {error ? <ErrorMessage message={'Datos incorrecto'}/> : ''}
      {success ? <SuccessMessage type={'Usuario'}/> : ''}

      <style jsx>{
        `
        main{
          display:flex;
          align-items: center;
          justify-content: center;
        }
      
        `
        }</style>
    </main>
  )
}

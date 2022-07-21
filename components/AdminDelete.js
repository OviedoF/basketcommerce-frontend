import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

export default function AdminDelete({id, setSuccess, setError, setIsLoading, nameApi}) {

  const handleDelete = () => {
    setIsLoading(true);

    setError(false);
    setSuccess(false);

    axios.delete(`https://basket-commerce-api.herokuapp.com/api/${nameApi}/${id}`)
      .then(res => {
        setSuccess(true);
        setIsLoading(false);
        console.log(res);
      })
      .catch(err => {
        setError(true);
        setIsLoading(false);
        console.log(err);
      })
  }

  return (
    <div 
      className="delete" 
      style={{color: 'rgb(231, 53, 43)', cursor: 'pointer'}}
      onClick={(e) => handleDelete()}
    >
        <FontAwesomeIcon icon={faTrashCan} />
    </div>
  )
}

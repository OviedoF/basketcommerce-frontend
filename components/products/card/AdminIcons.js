import React from 'react'
import AdminDelete from '../../AdminDelete';
import AdminEdit from '../../AdminEdit';

export default function AdminIcons({product, setSuccess, setError, setIsLoading}) {
    
  return (
    <div className='container'>

        <AdminEdit id={product._id}/>

        <AdminDelete id={product._id} setIsLoading={setIsLoading} setError={setError} setSuccess={setSuccess} nameApi='products'/>

        <style jsx>{`
            div.container{
                display: flex;
                width: 30%;
                justify-content: space-evenly;
                position: absolute;
                right: 0;
                bottom: 15px;
                color: red;
            }    

            .container div{
                cursor: pointer;
            }

        `}</style>


    </div>
  )
}

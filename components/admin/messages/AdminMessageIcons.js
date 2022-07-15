import React from 'react'
import AdminDelete from '../../AdminDelete'

export default function AdminMessageIcons({id, setIsLoading, setSuccess, setError}) {
  return (
    <div>
        <AdminDelete 
            id={id}
            setIsLoading={setIsLoading} 
            setError={setError} 
            setSuccess={setSuccess}
            nameApi='comments'
        />

        <style jsx>{`
            div{
                display: flex;
                width: 10%;
                justify-content: flex-end;
                position: absolute;
                right: 15px;
                top: 15px;
                color: red;
            }    

             div{
                cursor: pointer;
            }

        `}</style>
    </div>
  )
}

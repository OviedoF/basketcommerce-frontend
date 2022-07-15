import MessageCard from './MessageCard';
import React, { useState, useEffect } from 'react';
import Spinner from '../../loading/spinner/Spinner';
import ErrorMessage from '../../ErrorMessage';
import DoneMessage from '../../DoneMessage';

export default function ({comments}) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

  return (
    <div>
        {comments.map(message => (
            <MessageCard 
                key={message._id} 
                message={message} 
                setIsLoading={setIsLoading} 
                setError={setError} 
                setSuccess={setSuccess}
            />
        ))}

        {isLoading ? <Spinner speed={1.3}/> : ''}
        {error ? <ErrorMessage message={''}/> : ''}
        {success ? <DoneMessage type={'Eliminación'}/> : ''}

        <style jsx>{
            `
                div{
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: space-around;
                    width: 100%;
                    height: 100%;
                    overflow-y: scroll;
                    padding: 100px;
                }

                div::-webkit-scrollbar {
                    -webkit-appearance: none;
                }
                    
                div::-webkit-scrollbar:vertical {
                    width:10px;
                }
                    
                div::-webkit-scrollbar-button:increment,div::-webkit-scrollbar-button {
                    display: none;
                } 
                    
                div::-webkit-scrollbar:horizontal {
                    height: 10px;
                }
                    
                div::-webkit-scrollbar-thumb {
                    background-color: #79797970;
                    border-radius: 50px;
                }
            `
        }</style>
    </div>
  )
}

import React from 'react';

const ErrorMessage = ({message, setError}) => {
    return (
        <div onMouseLeave={(e) => setError(false)}>
            <h2>¡Ha ocurrido un error!</h2>
            <p>{message}</p>

            <style jsx>{`
                div{
                    height: 20vh;
                    width: 25vw;
                    background-color: #dc3545;
                    color: #F2F2F2;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    border-radius: 15px;
                    position: absolute;
                    bottom: 30vh;
                    opacity: 0;
                    left: 40%;
                    animation: appear 4s ease-in;
                }

                div p {
                    margin-top: 15px
                }

                @keyframes appear{
                    0%{
                        opacity: 0;
                    }

                    10%{
                        opacity: 1;
                    }

                    100%{
                        opacity: 0;
                    }
                }
            `}</style>
        </div>
    );
}

export default ErrorMessage;

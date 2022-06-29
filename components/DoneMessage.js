import React from 'react';

const ErrorMessage = ({message, setError}) => {
    return (
        <div onMouseLeave={(e) => setError(false)}>
            <h2>¡Producto creado con éxito!</h2>

            <style jsx>{`
                div{
                    height: 20vh;
                    width: 25vw;
                    background-color: #28a745;
                    color: #F2F2F2;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 15px;
                    position: absolute;
                    bottom: 30vh;
                    opacity: 0;
                    left: 40%;
                    animation: appear 4s ease-in;
                }

                div h2 {
                    margin-left: 15px;
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

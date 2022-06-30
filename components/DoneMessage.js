import React from 'react';

const ErrorMessage = ({type, setError}) => {
    return (
        <div>
            <h2>¡{type} enviado con éxito!</h2>

            <style jsx>{`
                div{
                    height: 13vh;
                    width: 60vw;
                    background-color: #28a745;
                    color: #F2F2F2;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    border-bottom-right-radius: 15px;
                    border-bottom-left-radius: 15px;
                    position: fixed;
                    top: 0;
                    left: 20vw;
                    opacity: 0;
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
                        display: none;
                    }
                }
            `}</style>
        </div>
    );
}

export default ErrorMessage;

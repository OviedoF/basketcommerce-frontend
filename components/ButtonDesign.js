import React from 'react'

export default function ButtonDesign({text, sendToCart}) {
  return (
    <div className="button" onClick={() => sendToCart()}>
        <p>{text}</p>

        <style jsx>{`
            div{
                user-select: none;
                height: 50px;
                position: relative;
                margin-top: 30px;
                cursor: pointer;
            }
            p{
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: center;
                padding: 15px 30px;
                text-transform: uppercase;
                text-decoration: none;
                color: #F2F2F2;
                letter-spacing: 2px;
                font-size: 20px;
            }

            p:before{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: #F96D00;
                z-index: -1;
                transition: transform 0.5s;
                transform-origin: bottom right;
                transform: scale(0);
            }

            p:hover:before
            {
                transition: transform 0.5s;
                transform-origin: top left;
                transform: scale(1);
            }

            p:after{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background:transparent;
                border: 2px solid #F2F2F2;
                box-sizing: border-box;
                z-index: -1;
                transition: transform 0.5s;
                transform-origin: top left;
                transform: scale(1);
            }

            p:hover:after{
            transition: transform 0.5s;
            transform-origin: bottom right;
            transform: scale(0);
            }
        `}</style>
    </div>
    
  )
}

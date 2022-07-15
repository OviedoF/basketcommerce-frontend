import React from 'react'
import Link from 'next/link';

export default function NoItemsFoundText() {
  return (
    <div className='container'>
        <h1>¡Ups! Parece que aún no se ha encontrado nada :(</h1>

        <div className="p">
            <p>Pruebe encontrando su modelo deseado y agregándolo al carrito!</p>
            <p>Podrá encontrarlo en <Link href='/products'>productos</Link> o buscando su <Link href="/">categoría favorita</Link></p>
        </div>

        <style jsx>{`
            div.container{
                height: 100%;
                padding: 0px 30px;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
            }

            h1{
                font-size: 40px;
            }

            p{
                font-size: 16px;
                margin-top: 5px;
            }
        `}</style>
    </div>
  )
}

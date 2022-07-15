import React from 'react'

export default function ProductEditData({handleChange, product}) {
  return (
    <div>
        <input 
          type="text" 
          name="name" 
          onChange={(e) => handleChange(e)} 
          placeholder={product.name}
        />

        <input 
          type="number" 
          name="price" 
          onChange={(e) => handleChange(e)} 
          placeholder={product.price}
        />

        <input 
          type="text" 
          name="category" 
          onChange={(e) => handleChange(e)} 
          placeholder={product.category}
        />

        <button type="submit">Actualizar</button>

        <style jsx>{`              
                    div{
                        width: 47%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        height: 100%;
                    }

                    input, button {
                        margin-top: 40px;
                        height: 30px;
                        background-color: #00000020;
                    }

                    button {
                        width: 30%;
                        position: relative;
                        bottom: 0;
                        cursor: pointer;
                    }

                    input:-webkit-autofill,
                    input:-webkit-autofill:hover,
                    input:-webkit-autofill:focus,
                    input:-webkit-autofill:active {
                        transition: all 100000000s ease-in-out 0s;
                    }
            `}</style>
    </div>
  )
}

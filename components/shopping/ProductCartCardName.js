import React from 'react'

export default function ProductCartCardName({name, category, color, size}) {
  return (
    <div className="name">
        <h3>{name}</h3>
        <p>{category} talle {size} - Color {color}</p>

        <style jsx>{`
            .name{
                width: 50%;
            }    

            p{
                text-transform: capitalize;
                margin-top: 10px;
            }
        `}</style>
    </div>
  )
}

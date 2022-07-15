import React from 'react'
import Image from 'next/dist/client/image'

export default function ProductCartCardImage({imgs}) {
  return (
    <div className="img">
        <Image 
            src={imgs[imgs.length - 1]}
            width={120}
            height={120}
        />
        
        <style jsx>{`
          .img{
            background-color: #00000008;
          }  
        `}</style>
    </div>
  )
}

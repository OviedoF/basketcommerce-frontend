import Image from 'next/image';
import React from 'react'
import { v4 } from 'uuid';

export default function ImagesContainer({images}) {

  return (
    <div className='container'>
        {images.map(el => {
            return <div className='image' key={v4()}>
                    <Image width={400} className="imagen" height={400} src={el} layout={'intrinsic'} />
                </div>
        })}

        <style jsx>{`
            div.container{
                width: 60%;
                display: flex;
                flex-wrap: wrap;
                padding: 10px 0px;
                justify-content: center;
            }

            .image{
                margin: 5px;
                width: 47%;
            }
        `}</style>
    </div>
  )
}
import Link from 'next/link'
import React from 'react'

export default function AddCategoryIcon() {
  return (
    <Link href={'/admin/add-category'}>
        <div>
            +

            <style jsx>{`
                div{
                cursor: pointer;
                background-color: black;
                position: absolute;
                bottom: 30px;
                right: 30px;
                width: 50px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                    border-radius: 50%;
                    font-size: 30px;
                    transition: all .6s;
                }

                div:hover{
                    transform: rotate(90deg);
                }
            `}</style>
        </div>
    </Link>

  )
}

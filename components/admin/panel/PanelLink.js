import React from 'react'
import Link from 'next/dist/client/link'
import Image from 'next/image';
import styles from './PanelLink.module.scss';

export default function PanelLink({img, text, dir}) {
  return (
    <Link href={dir}>
        <div className={styles.container}>
            <div className={styles.image}>
                <Image 
                    src={img}  
                    alt={text + 'IMAGE'}
                    layout={'fill'}
                    objectFit={'cover'}
                />
            </div>

            <div className={styles.background}>
                <h2>{text}</h2>
            </div>
        </div>
    </Link>
  )
}

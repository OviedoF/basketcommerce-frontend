import React from 'react'
import styles from './ButtonDesign.module.scss';

export default function ButtonDesign({text, action}) {
  return (
    <div className={styles.div} onClick={(e) => action()}>
        <p>{text}</p>
    </div>
  )
}

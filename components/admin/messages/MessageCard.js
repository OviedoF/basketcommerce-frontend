import React from 'react'
import styles from './MessageCard.module.scss'
import AdminMessageIcons from './AdminMessageIcons'

export default function MessageCard({message, setIsLoading, setSuccess, setError}) {
  return (
    <div className={styles.card}>
        <AdminMessageIcons 
            id={message._id}
            setIsLoading={setIsLoading} 
            setError={setError} 
            setSuccess={setSuccess}
        />

        <div className={styles.details}>
            <h2>{message.typeQuery === 'otro' ? message.customQuery : message.typeQuery}</h2>
            <p>{message.name} - {message.email ? <span className={styles.email}>{message.email}</span> : ''}</p>
        </div>
        
        <p>{message.details}</p>

        <p className={styles.date}>{message.createdAt}</p>
    </div>
  )
}

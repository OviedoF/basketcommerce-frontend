import React from 'react'
import Link from 'next/dist/client/link'
import { faPlus, faMessage, faUserLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from './AdminLinks.module.scss';
import { useDispatch } from 'react-redux';
import { admin_logout } from '../../src/actions/authActions';

export default function AdminLinks({nav_status }) {
    const dispatch = useDispatch();

  return (
    <div className={styles.div}>
        <li id="nav_add_product" className={nav_status.active === 'add_product' ? styles.active : ''}>
            <Link href={'/admin/add-product'}> 
                <FontAwesomeIcon icon={faPlus}/>
            </Link>
        </li>

        <li id="nav_messages" className={nav_status.active === 'messages' ? styles.active : ''}>
            <Link href={'/admin/messages'}>
                <FontAwesomeIcon icon={faMessage}/>
            </Link>
        </li>

        <li id="nav_admin" onClick={() => dispatch( admin_logout() )}>
            <FontAwesomeIcon icon={faUserLock}/>
        </li>
    </div>
  )
}

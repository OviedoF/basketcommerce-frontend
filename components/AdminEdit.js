import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

const AdminEdit = ({id}) => {
    return (
        <div className="edit" style={{color: 'rgb(12, 186, 60)',cursor: 'pointer'}}>
            <Link href={`/products/edit/${id}`}>
                <FontAwesomeIcon icon={faEdit} />
            </Link>
        </div>
    );
}

export default AdminEdit;

import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus} from "@fortawesome/free-solid-svg-icons";
import NoItemsFoundText from './NoItemsFoundText';

export default function NoItemsFound() {
  return (
    <div className='container'>
        <div className="icon">
            <FontAwesomeIcon icon={faCartPlus} />
        </div>

        <NoItemsFoundText />

        <style jsx>{`
            .container{
                display: flex;
                height: 30vh;
                align-items: center;
                padding: 30px;
            }

            .icon{
                    width: 24%;
                    font-size: 700%;
            }
        `}</style>
    </div>
  )
}

import ColorFormContainer from "./ColorFormContainer";
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown} from "@fortawesome/free-solid-svg-icons";

function ColorFormActivator() {
    const [isActive, setIsActive] = useState(false);

    return ( 
        <div>
            <div className="act" onMouseEnter={() => setIsActive(true)}>
                <p>Elegir por color</p>
                <FontAwesomeIcon icon={faAngleDown} /> 
            </div>
            {/* <p onMouseOver={(e) => setIsActive(!isActive)}>Elegir talles <FontAwesomeIcon icon={faAngleDown} /> </p> */}
            <ColorFormContainer isActive={isActive} setIsActive={setIsActive}/>

            <style jsx>
                {`
                    div {
                        width: 45%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        background-color: inherit;
                        position: relative;
                    }

                    div .act{
                        cursor: pointer;
                        width: 30%;
                        height: 35%;
                        border-radius: 20px;
                        display: flex;
                        align-items: center;
                        justify-content: space-around;
                    }
                `}
            </style>
        </div>
     );
}

export default ColorFormActivator;
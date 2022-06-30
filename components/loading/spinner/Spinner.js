import react from "react";
import styles from './Spinner.module.scss';

export default function Spinner(props) {
    return (
        <div className={styles.spinner_container}>
     
            <svg width="100px"  viewBox="0 0 276 276" fill="none" xmlns="http://www.w3.org/2000/svg" >
                <g id={styles.spinner}>
                    <circle id={styles.bottom} cx="138" cy="138" r="114" stroke="#DBDBDB" stroke-width="18" />
                    <circle id={styles.upper} cx="138" cy="138" r="123" stroke="#72BBFF" stroke-width="30" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="373 100" style={{animationDuration:props.speed+"s"}}/>
                </g>
            </svg>
            <p>{props.customText}</p>

        </div>

    )
}
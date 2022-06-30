import react from "react";

export default function SlidingPebbles(props) {

    return (
        <div className="spinner-container">

            <svg width="100%" height="46" viewBox="0 0 69 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="slidingpebbles">
                    <circle id="left" cx="23" cy="23" r="23" fill="#10CA00" />
                    <circle id="right" cx="46" cy="23" r="23" fill="#13EC00" />
                </g>
            </svg>


            <p>{props.customText}</p>

            <style jsx>{`
                .spinner-container
                {
                    background-color: #fff;
                    
                    z-index: 99;
                    position: fixed;
                    width: 100px;
                    padding: 10px;
                    top: 50%;
                    display: flex;
                    justify-content: center;
                    align-content: center;
                    flex-direction: column;
                    left: 50%;
                    margin-top: -100px; 
                    margin-left: -50px;
                    border-radius: 0.5rem;
                
                }
                
                .spinner-container p
                {
                    text-align: center;
                    margin: 5px 0 0 0;
                }
                
                #left
                
                {
                    animation: slide linear;
                    animation-duration: 2s;
                    animation-iteration-count: infinite;
                    transform-origin: center;
                    transform-box: border-box;
                }
                
                #right
                
                {
                    animation: slide-inverse linear;
                    
                    animation-duration: 2s;
                    animation-iteration-count: infinite;
                    transform-origin: center;
                    transform-box: border-box;
                    
                }
                
                @keyframes slide {
                    0%
                    {
                        transform:translateX(0px);
                    }
                    50%
                    {
                        transform:translateX(20px);
                    }
                    100%
                    {
                        transform:translateX(0px);
                    }
                }
                
                @keyframes slide-inverse {
                    0%
                    {
                        transform:translateX(0px);
                    }
                    50%
                    {
                        transform:translateX(-20px);
                    }
                    100%
                    {
                        transform:translateX(0px);
                    }
                
                }
            `}</style>
        </div>

    )
}
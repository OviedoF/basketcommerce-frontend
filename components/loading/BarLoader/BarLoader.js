export default function BarLoader(props) {

    return (
        <div className="spinner-container">
            
            <svg width="87" height="50" viewBox="0 0 87 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="loader_bars">
                    <g id="upperbar">
                        <rect id="1_2" width="67" height="14" rx="7" fill="#FF72C6" />
                    </g>
                    <g id="middlebar">
                        <rect id="Rectangle 2" x="20" y="18" width="67" height="14" rx="7" fill="#FF3AB0" />
                    </g>
                    <g id="bottombar">
                        <rect id="3_2" y="36" width="67" height="14" rx="7" fill="#FD0098" />
                    </g>
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
                
                #upperbar
                
                {
                    animation: upperBar linear;
                    animation-duration: 2s;
                    animation-iteration-count: infinite;
                    transform-origin: center;
                    transform-box: border-box;
                }
                
                #middlebar
                
                {
                    animation: middlebar ease;
                    
                    animation-duration: 2s;
                    animation-iteration-count: infinite;
                    transform-origin: center;
                    transform-box: border-box;
                    
                }
                
                #bottombar
                {
                    animation: bottombar ease;
                    
                    animation-duration: 2s;
                    animation-iteration-count: infinite;
                    transform-origin: center;
                    transform-box: border-box;
                }
                
                @keyframes upperBar {
                    0%
                    {
                     transform: translateX(0px);
                    }
                    50%
                    {
                        transform: translateX(15px);
                    }
                   100%
                    {
                     transform: translateX(0px);
                    }
                }
                
                
                @keyframes middlebar {
                    0%
                    {
                     transform: translateX(-20px);
                    }
                    50%
                    {
                        transform: translateX(0px);
                    }
                   100%
                    {
                     transform: translateX(-20px);
                    }
                
                    
                }
                
                @keyframes bottombar {
                    0%
                    {
                     transform: translateX(0px);
                    }
                    50%
                    {
                        transform: translateX(10px);
                    }
                   100%
                    {
                     transform: translateX(0px);
                    }
                
                
                }                
            `}</style>
        </div>

    )
}
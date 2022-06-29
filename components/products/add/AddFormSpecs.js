import React from 'react';

const AddFormSpecs = ({handleChange, handleSizes}) => {
    const sizes = [36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

    return (
            <div className='specs'>
                <select name="color" id="" onChange={(e) => handleChange(e)}>
                    <option value="">Selecciona el color</option>

                    <option value="black">Black</option>
                    <option value="blue">Blue</option>
                    <option value="brown">Brown</option>
                    <option value="green">Green</option>
                    <option value="grey">Grey</option>
                    <option value="multicolor">Multicolor</option>
                    <option value="orange">Orange</option>
                    <option value="pink">Pink</option>
                    <option value="purple">Purple</option>
                    <option value="red">Red</option>
                    <option value="white">White</option>
                    <option value="yellow">Yellow</option>
                </select>

                <div className='sizes'>
                    <p>Talles disponibles</p>
                    {sizes.map(el => {
                        return <div className="size-selector" key={el}>
                            <label htmlFor={'size'+ el}>{el}</label>
                            <input type="checkbox" active={'true'} name={el} onChange={(e) => handleSizes(e)}/>
                        </div>
                    })}
                </div>

                <textarea name="description" cols="30" rows="10" placeholder='description' onChange={(e) => handleChange(e)}/>

                <style jsx>{`
                    .specs{
                        width: 50%;
                    }
                    
                    .specs select{
                        margin-top: 40px;
                        height: 30px;
                        background-color: #00000020;
                    }

                    .specs select option{
                        color: black;
                    }

                    .specs div.sizes{
                        background-color: #00000020;
                        margin: 50px 0;
                        width: 100%;
                        flex-wrap: wrap;
                        display: flex;
                    }
                    
                    .specs div.sizes p{
                        width: 100%;
                    }

                    .specs div.sizes div{
                        margin-top: 10px;
                        margin-left: 30px;
                    }

                    .specs textarea, select{
                        width: 100%;
                        background-color: transparent;
                        background-color: #00000020;
                    }
                `}</style>
            </div>
    );
}

export default AddFormSpecs;

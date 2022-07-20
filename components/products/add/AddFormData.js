function AddFormData({handleChange}) {
    return ( 
        <div className="DataInputs">
            <input type="file" name="images" id="" onChange={(e) => handleChange(e)} multiple/>
            <input type="text" name="name" id="" onChange={(e) => handleChange(e)} placeholder='Name'/>
            <input type="number" name="price" id="" onChange={(e) => handleChange(e)} placeholder='Price'/>
            <input type="number" name="priceWithOffer" id="" onChange={(e) => handleChange(e)} placeholder='Price with offer (optional)'/>
            <input 
            type="text" 
            name="category" id="" 
            onChange={(e) => handleChange(e)} 
            placeholder='Deportist (for example "Jordan", "Giannis")'
            />
            <button type="submit">Enviar</button>

            <style jsx>{`              
                    .DataInputs{
                        width: 47%;
                        height: 100%;
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        height: 100%;
                    }

                    input, button {
                        margin-top: 40px;
                        height: 30px;
                        background-color: #00000020;
                    }

                    button {
                        width: 30%;
                        position: relative;
                        bottom: 0;
                        cursor: pointer;
                    }

                    input:-webkit-autofill,
                    input:-webkit-autofill:hover,
                    input:-webkit-autofill:focus,
                    input:-webkit-autofill:active {
                        transition: all 100000000s ease-in-out 0s;
                    }
            `}</style>
        </div>
     );
}

export default AddFormData;
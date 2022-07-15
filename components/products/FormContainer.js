import ColorFormActivator from "./ColorFormActivator";
import SizeFormActivator from "./SizeFormActivator";

function FormContainer({color, setColor, products, sizesActive, setSizesActive}) {
    return ( 
        <form onSubmit={(e) => e.preventDefault()}>
            <ColorFormActivator 
                color={color} 
                setColor={setColor} 
                products={products} 
            />
            <SizeFormActivator 
                products={products}
                sizesActive={sizesActive} 
                setSizesActive={setSizesActive}
            />

            <style jsx>
                {`
                    form{
                        display: flex;
                        width: 100%;
                        height: 120px;
                        justify-content: space-around;
                        align-items: center;
                    }
                `}
            </style>
        </form>
     );
}

export default FormContainer;
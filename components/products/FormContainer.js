import ColorFormActivator from "./ColorFormActivator";
import ColorFormContainer from "./ColorFormContainer";
import SizeFormActivator from "./SizeFormActivator";
import SizeFormContainer from "./SizeFormContainer";

function FormContainer() {
    return ( 
        <form>
            <ColorFormActivator />
            <SizeFormActivator />

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
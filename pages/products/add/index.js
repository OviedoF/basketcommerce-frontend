import React from 'react';
import AddForm from '../../../components/products/add/AddForm';

const Index = () => {
    return (
        <main>
            <AddForm />
            
            <style jsx>
                {`
                main{
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                `}
            </style>
        </main>
    );
}

export default Index;

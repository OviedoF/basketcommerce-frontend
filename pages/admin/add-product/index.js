import React from 'react';
import AddForm from '../../../components/products/add/AddForm';
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import { change_icon_nav } from '../../../src/actions/handleNavActions';

const Index = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( change_icon_nav('add_product') );
    }, []);

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

import HomeSection from '../components/main/HomeSection';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { change_icon_nav } from '../src/actions/handleNavActions';

function Main() {
    const shoppingCart = useSelector(state => state.shoppingCart);
    console.log(shoppingCart);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( change_icon_nav('home') );
    }, []);

    return ( 
        <main>
            <HomeSection />
        </main>
     );
}

export default Main;
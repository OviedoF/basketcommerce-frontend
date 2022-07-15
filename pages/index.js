import HomeSection from '../components/main/HomeSection';
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { change_icon_nav } from '../src/actions/handleNavActions';
import axios from 'axios';

function Main({categorys}) {
    const shoppingCart = useSelector(state => state.shoppingCart);
    console.log(shoppingCart);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch( change_icon_nav('home') );
    }, []);

    return ( 
        <main>
            <HomeSection categorys={categorys}/>
        </main>
     );
}

export async function getServerSideProps(){
    const categorys = await axios('http://localhost:4000/api/categorys')
        .then(response => response.data)
        .catch(err => console.log(err));
   
    return {
        props: {
            categorys
        }
    };
}

export default Main;
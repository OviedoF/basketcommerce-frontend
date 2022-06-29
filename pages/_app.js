import React, { useState, useEffect } from 'react';
import Head from 'next/dist/shared/lib/head'; 
import '../assets/css/reset.css';
import Header from '../components/Header';
import favicon from '../assets/imgs/favicon.ico';

function App({Component, pageProps}) {
    return ( 
        <>
            <Head>
                <title>eCommerce</title>
            </Head>

            <Header />
            
            <Component {...pageProps}>
                
            </Component>
        </>
     );
}

export default App;
import React  from 'react';
import Head from 'next/dist/shared/lib/head'; 
import '../assets/css/reset.css';
import Header from '../components/header/Header';
import { Provider } from 'react-redux';
import store from '../src/store/index';

function App({Component, pageProps}) {
    return ( 
        <>
            <Head>
                <title>eCommerce</title>
            </Head>

            <Provider store={store}>
                <Header />
                
                <Component {...pageProps} />
            </Provider>
        </>
     );
}

export default App;
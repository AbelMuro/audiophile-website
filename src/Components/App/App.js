import React from 'react';
import NavigationBar from './NavigationBar';
import Cart from './Cart';
import HomePage from './HomePage';
import HeadphonesPage from './HeadphonesPage';
import SpeakersPage from './SpeakersPage';
import EarphonesPage from './EarphonesPage';
import ProductDetailPage from './ProductDetailPage';
import Footer from './Footer';
import CheckoutPage from './CheckoutPage'; 
import {store, persistedStore} from './Store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles.css';


function App(){

    return(
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistedStore}>
                <BrowserRouter>
                    <NavigationBar/>
                    <Cart/>
                    <Routes>
                        <Route path='/' element={<HomePage/>}/>
                        <Route path='/Headphones' element={<HeadphonesPage/>}/>
                        <Route path='/Speakers' element={<SpeakersPage/>}/>
                        <Route path='/Earphones' element={<EarphonesPage/>}/>
                        <Route path='/:product' element={<ProductDetailPage/>}/>
                        <Route path='/Checkout' element={<CheckoutPage/>}/>
                    </Routes> 
                    <Footer/>            
                </BrowserRouter>                
            </PersistGate>
        </Provider>
    )
}

export default App;
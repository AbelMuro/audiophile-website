import React from 'react';
import NavigationBar from './NavigationBar';
import HomePage from './HomePage';
import HeadphonesPage from './HeadphonesPage';
import SpeakersPage from './SpeakersPage';
import EarphonesPage from './EarphonesPage';
import ProductDetailPage from './ProductDetailPage';
import Footer from './Footer';
import Store from './Store';
import {Provider} from 'react-redux';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import './styles.css';

function App(){
    return(
        <Provider store = {Store}>
            <BrowserRouter>
                <NavigationBar/>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/Headphones' element={<HeadphonesPage/>}/>
                    <Route path='/Speakers' element={<SpeakersPage/>}/>
                    <Route path='/Earphones' element={<EarphonesPage/>}/>
                    <Route path='/:product' element={<ProductDetailPage/>}/>
                </Routes> 
                <Footer/>            
            </BrowserRouter>
        </Provider>
    )
}

export default App;
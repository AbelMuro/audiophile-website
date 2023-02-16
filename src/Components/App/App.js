import React from 'react';
import NavigationBar from './NavigationBar';
import Home from './Home';
import HeadphonesPage from './HeadphonesPage';
import SpeakersPage from './SpeakersPage';
import EarphonesPage from './EarphonesPage';
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
                    <Route path='/' element={<Home/>}/>
                    <Route path='/Headphones' element={<HeadphonesPage/>}/>
                    <Route path='/Speakers' element={<SpeakersPage/>}/>
                    <Route path='/Earphones' element={<EarphonesPage/>}/>
                </Routes> 
                <Footer/>            
            </BrowserRouter>
        </Provider>
    )
}

export default App;
import React from 'react';
import NavigationBar from './NavigationBar';
import Home from './Home';
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
                </Routes>                  
            </BrowserRouter>
        </Provider>
    )
}

export default App;
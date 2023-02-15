import React from 'react';
import Header from './Header';
import Products from './Products';
import Advertise from './Advertise';
import CompanyMessage from './CompanyMessage';
import Footer from './Footer';
import styles from './styles.module.css';


function Home() {

    return(
        <main className={styles.container}>
            <Header/>
            <Products/>
            <Advertise/>
            <CompanyMessage/>
            <Footer/>
        </main>
    )
}

export default Home;
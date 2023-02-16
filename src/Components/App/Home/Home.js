import React from 'react';
import Header from './Header';
import Categories from './../ReusableComponents/Categories';
import CompanyMessage from './../ReusableComponents/CompanyMessage';
import Advertise from './Advertise';
import styles from './styles.module.css';


function Home() {

    return(
        <main className={styles.container}>
            <Header/>
            <Categories/>
            <Advertise/>
            <CompanyMessage/>
        </main>
    )
}

export default Home;
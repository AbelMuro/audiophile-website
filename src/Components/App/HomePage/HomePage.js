import React from 'react';
import Header from './Header';
import Categories from './../ReusableComponents/Categories';
import CompanyMessage from './../ReusableComponents/CompanyMessage';
import Advertise from './Advertise';
import styles from './styles.module.css';


function HomePage() {

    return(
        <main className={styles.container}>
            <Header/>
            <div className={styles.categoriesBox}>
                <Categories/>
            </div>
            <Advertise/>
            <CompanyMessage/>
        </main>
    )
}

export default HomePage;
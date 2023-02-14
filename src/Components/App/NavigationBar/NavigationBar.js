import React from 'react';
import icons from './Icons'
import styles from './styles.module.css';

function NavigationBar() {
    return(
        <nav className={styles.navContainer}>
            <section className={styles.navBar}>
                <img src={icons["logo"]} className={styles.logo}/>
                <div className={styles.links}>
                    <a className={styles.link}>HOME</a>
                    <a className={styles.link}>HEADPHONES</a>
                    <a className={styles.link}>SPEAKERS</a>
                    <a className={styles.link}>EARPHONES</a>
                </div>
                <img src={icons["cartIcon"]} className={styles.iconCart}/>                
            </section>
        </nav>
    )
}

export default NavigationBar;
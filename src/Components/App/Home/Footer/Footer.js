import React from 'react';
import logo from './images/logo.svg';
import styles from './styles.module.css';

function Footer(){
    return(
        <footer className={styles.footer}>
            <section className={styles.content}>

                <div className={styles.itemOne}>
                    <img src={logo}/>
                    <div className={styles.footerNav}>
                        <a className={styles.footerLink}>HOME</a>
                        <a className={styles.footerLink}>HEADPHONES</a>
                        <a className={styles.footerLink}>SPEAKERS</a>
                        <a className={styles.footerLink}>EARPHONES</a>       
                    </div>
                </div>
                 
                <div className={styles.itemTwo}>
                    <p>
                        Audiophile is an all in one stop to fulfill your audio needs. 
                        We're a small team of music lovers and sound specialists 
                        who are devoted to helping you get the most out of personal audio.
                        Come and visit our demo facility - we're open 7 days a week.                        
                    </p>
                    <div>
                        <img />
                        <img />
                        <img />
                    </div>
                </div>


                <p className={styles.itemThree}>
                    Copyright 2021. All Rights Reserved.
                </p>
            </section>
        </footer>
    )

}

export default Footer;
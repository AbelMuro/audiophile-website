import React from 'react';
import {useNavigate} from 'react-router-dom';
import images from './images';
import styles from './styles.module.css';

function Footer(){
    const navigate = useNavigate();

    const handleNavLink = (e) => {
        const route = e.target.getAttribute('data-route');
        navigate(route);
    }

    const handleSocialMediaLink = () => {

    } 

    return(
        <footer className={styles.footer}>
            <section className={styles.content}>

                <div className={styles.orangeLine}></div>

                <div className={styles.itemOne}>
                    <img src={images.logo} className={styles.logo}/>
                    <div className={styles.footerNav}>
                        <a className={styles.footerLink} onClick={handleNavLink} data-route='/'>HOME</a>
                        <a className={styles.footerLink} onClick={handleNavLink} data-route='/Headphones'>HEADPHONES</a>
                        <a className={styles.footerLink} onClick={handleNavLink} data-route='/Speakers'>SPEAKERS</a>
                        <a className={styles.footerLink} onClick={handleNavLink} data-route='/Earphones'>EARPHONES</a>       
                    </div>
                </div>
                 
                <div className={styles.itemTwo}>
                    <p>
                        Audiophile is an all in one stop to fulfill your audio needs. 
                        We're a small team of music lovers and sound specialists 
                        who are devoted to helping you get the most out of personal audio.
                        Come and visit our demo facility - we're open 7 days a week.                        
                    </p>
                    <div className={styles.socialNav}>
                        <img className={styles.facebook}/>
                        <img className={styles.twitter}/>
                        <img className={styles.instagram}/>
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
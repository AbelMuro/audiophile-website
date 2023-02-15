import React from 'react';
import icons from './Icons';
import {useNavigate} from 'react-router-dom';
import styles from './styles.module.css';

function NavigationBar() {
    const navigate = useNavigate();

    const handleClick = (e) => {
        const route = e.target.getAttribute("data-route");
        navigate(route);
    }

    const handleCart = () => {

    }

    return(
        <nav className={styles.navContainer}>
            <section className={styles.navBar}>
                <img src={icons["logo"]} className={styles.logo}/>
                <div className={styles.links}>
                    <a className={styles.link} onClick={handleClick} data-route='/'>HOME</a>
                    <a className={styles.link} onClick={handleClick} data-route='/'>HEADPHONES</a>
                    <a className={styles.link} onClick={handleClick} data-route='/'>SPEAKERS</a>
                    <a className={styles.link} onClick={handleClick} data-route='/'>EARPHONES</a>
                </div>
                <img onClick={handleCart} className={styles.iconCart}/>                
            </section>
        </nav>
    )
}

export default NavigationBar;
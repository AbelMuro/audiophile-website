import React, {useRef} from 'react';
import icons from './Icons';
import {useNavigate} from 'react-router-dom';
import styles from './styles.module.css';

function NavigationBar() {
    const navigate = useNavigate();
    const navBar = useRef();

    const handleClick = (e) => {
        const route = e.target.getAttribute("data-route");
        if(route != "/")
            navBar.current.style.backgroundColor = "black";
        else
            navBar.current.style.backgroundColor = "";
        navigate(route);
    }

    const handleCart = () => {

    }

    return(
        <nav className={styles.navContainer} ref={navBar}>
            <section className={styles.navBar}>
                <img src={icons["logo"]} className={styles.logo} onClick={handleClick} data-route='/'/>
                <div className={styles.links}>
                    <a className={styles.link} onClick={handleClick} data-route='/'>HOME</a>
                    <a className={styles.link} onClick={handleClick} data-route='/Headphones'>HEADPHONES</a>
                    <a className={styles.link} onClick={handleClick} data-route='/Speakers'>SPEAKERS</a>
                    <a className={styles.link} onClick={handleClick} data-route='/Earphones'>EARPHONES</a>
                </div>
                <img onClick={handleCart} className={styles.iconCart}/>                
            </section>
        </nav>
    )
}

export default NavigationBar;
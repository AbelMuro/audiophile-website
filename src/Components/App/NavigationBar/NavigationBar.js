import React, {useRef, useState, useEffect} from 'react';
import { useMediaQuery } from '@mui/material';
import Categories from './../ReusableComponents/Categories';
import icons from './Icons';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import styles from './styles.module.css';


function NavigationBar() {
    const mobile = useMediaQuery('(max-width: 768px)')
    const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const navBar = useRef();
    const mobileMenu = useRef();

    const handleClick = (e) => {
        const route = e.target.getAttribute("data-route");
        if(route != "/")
            navBar.current.style.backgroundColor = "black";
        else
            navBar.current.style.backgroundColor = "";
        navigate(route);
    }

    const handleMobileMenu = () => {
        setDisplayMobileMenu(!displayMobileMenu);
        mobileMenu.current.style.height = '340px';
    }

    const handleCart = () => {
        dispatch({type: 'open'});
    }

    useEffect(() => {
        if(!mobile)
            setDisplayMobileMenu(false);
    }, [mobile])

    return(
        <>
            <nav className={styles.navContainer} ref={navBar}>
                <section className={styles.navBar}>
                    {mobile ? <img src={icons.hamburgerMenu} className={styles.hamburgerMenu} onClick={handleMobileMenu}/> : <></>}
                    <img src={icons["logo"]} className={styles.logo} onClick={handleClick} data-route='/'/>
                    {mobile ? <></> : <div className={styles.links}>
                        <a className={styles.link} onClick={handleClick} data-route='/'>HOME</a>
                        <a className={styles.link} onClick={handleClick} data-route='/Headphones'>HEADPHONES</a>
                        <a className={styles.link} onClick={handleClick} data-route='/Speakers'>SPEAKERS</a>
                        <a className={styles.link} onClick={handleClick} data-route='/Earphones'>EARPHONES</a>
                    </div> }
                    <img onClick={handleCart} className={styles.iconCart}/>                
                </section>
            </nav>   
            <div className={styles.mobileMenu} ref={mobileMenu}>
                {displayMobileMenu ? <Categories/> : <></>} 
            </div>
            
        </>

    )
}

export default NavigationBar;
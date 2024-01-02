import React, {useRef, useState, useEffect} from 'react';
import { useMediaQuery } from '@mui/material';
import Categories from './../ReusableComponents/Categories';
import icons from './Icons';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import styles from './styles.module.css';

function NavigationBar() {
    const tablet = useMediaQuery('(max-width: 768px)');
    const [displayMobileMenu, setDisplayMobileMenu] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const navBar = useRef();
    const mobileMenu = useRef();
    const overlay = useRef();

    const handleClick = (e) => {
        const route = e.target.getAttribute("data-route");
        if(route != "/")
            navBar.current.style.backgroundColor = "black";
        else
            navBar.current.style.backgroundColor = "";
        navigate(route);
    }

    const handleCart = () => {
        dispatch({type: 'open'});
    }

    const handleMobileMenu = () => {
        setDisplayMobileMenu(!displayMobileMenu);
    }


    useEffect(() => {
        if(displayMobileMenu){
            overlay.current.style.display = 'block';  
            setTimeout(() => {        
                if(!overlay.current || !mobileMenu.current) 
                    return;
                overlay.current.style.backgroundColor = 'rgba(85, 85, 85, 0.5)'                                                                       
                mobileMenu.current.style.transform = 'scaleY(1)';                         
            }, 10)                                                                                      
        }
        else{
            mobileMenu.current.style.transform = '';
            overlay.current.style.backgroundColor = '';
            setTimeout(() => {     
                if(!overlay.current) 
                    return;                 
                overlay.current.style.display = '';
            }, 200) 
        }
            
    }, [displayMobileMenu])




    /* mobile menu will close if the user resizes the window, this helps prevent any visual bugs*/
    useEffect(() => {
        if(!tablet)
            setDisplayMobileMenu(false);
    }, [tablet])


    return(
        <>
            <nav className={styles.navContainer} ref={navBar}>
                <section className={styles.navBar}>
                    {tablet ? <img src={icons.hamburgerMenu} className={styles.hamburgerMenu} onClick={handleMobileMenu}/> : <></>}
                    <img src={icons["logo"]} className={styles.logo} onClick={handleClick} data-route='/'/>
                    {tablet ? <></> : <div className={styles.links}>
                        <a className={styles.link} onClick={handleClick} data-route='/'>HOME</a>
                        <a className={styles.link} onClick={handleClick} data-route='/Headphones'>HEADPHONES</a>
                        <a className={styles.link} onClick={handleClick} data-route='/Speakers'>SPEAKERS</a>
                        <a className={styles.link} onClick={handleClick} data-route='/Earphones'>EARPHONES</a>
                    </div> }
                    <img onClick={handleCart} className={styles.iconCart}/>             
                </section>   
            </nav>   
            <div className={styles.overlay} ref={overlay}>
            </div>       
            <div className={styles.mobileMenu} ref={mobileMenu}>
                <Categories closeMobileMenu={handleMobileMenu}/>
            </div>         
        </>

    )
}

export default NavigationBar;
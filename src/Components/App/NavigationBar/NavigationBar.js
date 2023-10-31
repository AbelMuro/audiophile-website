import React, {useRef, useState, useEffect} from 'react';
import { useMediaQuery } from '@mui/material';
import Categories from './../ReusableComponents/Categories';
import icons from './Icons';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import styles from './styles.module.css';

function NavigationBar() {
    const tablet = useMediaQuery('(max-width: 768px)');
    const mobile = useMediaQuery('(max-width: 500px)');
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
            setTimeout(() => {                                                                     //using a setTimeout() to ensure that the mobileMenu works with css transition              
                mobileMenu.current.style.height = mobile ? '760px' : '340px';                       //the issue here is that overlay instantly appears when we set display: block
                mobileMenu.current.style.padding = mobile ? '101.5px 0 35px 0' : '56px 0 0 0';      //which cancels any animation created by css transition
            })                                                                                      
        }
        else{
            mobileMenu.current.style.height = '';
            mobileMenu.current.style.padding = '';
            setTimeout(() => {                      
                overlay.current.style.display = '';
            }, 400) 
        }
            
    }, [displayMobileMenu])



    /* mobile menu will close if the user resizes the window, this helps prevent any visual bugs*/
    useEffect(() => {
        const handleResize = () => {
            setDisplayMobileMenu(false);
        }
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])


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
                <div className={styles.mobileMenu} ref={mobileMenu}>
                    {displayMobileMenu ? <Categories closeMobileMenu={handleMobileMenu}/> : <></>}
                </div>
            </div>                
        </>

    )
}

export default NavigationBar;
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
            mobileMenu.current.style.height = mobile ? '760px' : '340px';                   /* figure out how to make the background transparent when this is displayed*/
            mobileMenu.current.style.padding = mobile ? '101.5px 0px 35px 0px' : '56px 0 0 0';      
        }
        else{
            mobileMenu.current.style.height = '';
            mobileMenu.current.style.padding = '';    
        }
            
    }, [displayMobileMenu])


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
            <div className={styles.mobileMenu} ref={mobileMenu}>
                {displayMobileMenu ? <Categories/> : <></>} 
            </div>
            
        </>

    )
}

export default NavigationBar;
import React, {useRef, useEffect} from 'react';
import {useMediaQuery} from '@mui/material';
import mobileImageHeader from './images/image-hero-mobile.jpg';
import styles from './styles.module.css';
import AllProductData from './../../AllProductData';
import {useNavigate} from 'react-router-dom';

function Header(){
    const tablet = useMediaQuery('(max-width: 768px)');
    const navigate = useNavigate();
    const background = useRef();

    const handleClick = () => {
        const productChoosen = AllProductData['XX99 MARK II HEADPHONES'];
        navigate(`/${productChoosen.productTitle}`, {state : {product: productChoosen}})
    }

    useEffect(() => {
        if(!background.current) return
        
        if(tablet)
            background.current.style.backgroundImage = `url('${mobileImageHeader}')`;
        else
            background.current.style.backgroundImage = '';

    }, [tablet])

    return(
        <section className={styles.headerBackground} ref={background}>
            <div className={styles.flex}>
                <div className={styles.header}>
                    <h2 className={styles.titleOne}>
                        NEW PRODUCT
                    </h2>
                    <h1 className={styles.titleTwo}>
                        XX99 MARK II HEADPHONES
                    </h1>
                    <p className={styles.desc}>
                        Experience natural, lifelike audio and exceptional 
                        build quality made for the passionate music enthusiast.
                    </p>
                    <button className={styles.seeProductButton} onClick={handleClick}>
                        SEE PRODUCT
                    </button>
                </div>                      
            </div>
        </section>
    )
}

export default Header;
import React, {useRef} from 'react';
import images from './images';
import {useNavigate} from 'react-router-dom';
import styles from './styles.module.css';

function Products() {
    const navigate = useNavigate();
    const shopLinkOne = useRef();
    const shopLinkTwo = useRef();
    const shopLinkThree = useRef();

    const handleClick = (e) => {
        const category = e.target.getAttribute('data-category');
        navigate(`/${category}`)
        window.scrollTo(0,0);
    }

    const handleHeadphonesEnter = () => {
        shopLinkOne.current.style.color = "#D87D4A";
    }

    const handleHeadphonesLeave = () => {
        shopLinkOne.current.style.color = "";
    }

    const handleSpeakersEnter = () => {
        shopLinkTwo.current.style.color = "#D87D4A";
    }

    const handleSpeakersLeave = () => {
        shopLinkTwo.current.style.color = "";
    }

    const handleEarphonesEnter = () => {
        shopLinkThree.current.style.color = "#D87D4A";
    }

    const handleEarphonesLeave = () => {
        shopLinkThree.current.style.color = "";
    }

    return(
        <section className={styles.container}>
            
            <div className={styles.flex}>
                <div className={styles.productBox} onMouseEnter={handleHeadphonesEnter} onMouseLeave={handleHeadphonesLeave} onClick={handleClick} data-category="Headphones">
                    <img src={images["headphones"]} className={styles.productImage}/>
                    <h2 className={styles.productTitle}>
                        HEADPHONES
                    </h2>
                    <a className={styles.productLink} ref={shopLinkOne}>
                        <span className={styles.shop}>SHOP</span>
                        <img src={images["rightArrow"]} className={styles.arrow}/>
                    </a>
                </div>
                <div className={styles.productBox} onMouseEnter={handleSpeakersEnter} onMouseLeave={handleSpeakersLeave} onClick={handleClick} data-category="Speakers">
                    <img src={images["speakers"]} className={styles.productImage}/>
                    <h2 className={styles.productTitle}>
                        SPEAKERS
                    </h2>
                    <a className={styles.productLink} ref={shopLinkTwo}>
                        <span className={styles.shop}>SHOP</span>
                        <img src={images["rightArrow"]} className={styles.arrow}/>
                    </a>
                </div>
                <div className={styles.productBox} onMouseEnter={handleEarphonesEnter} onMouseLeave={handleEarphonesLeave} onClick={handleClick} data-category="Earphones">
                    <img src={images["earphones"]} className={styles.productImage}/>
                    <h2 className={styles.productTitle}>
                        EARPHONES
                    </h2>
                    <a className={styles.productLink} ref={shopLinkThree}>
                        <span className={styles.shop}>SHOP</span>
                        <img src={images["rightArrow"]} className={styles.arrow}/>
                    </a>
                </div>

            </div>

        </section>
    )
}

export default Products;
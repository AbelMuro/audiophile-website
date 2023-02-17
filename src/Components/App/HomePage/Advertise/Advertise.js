import React from 'react';
import images from './images';
import styles from './styles.module.css';
import AllProductData from '../../AllProductData';
import {useNavigate} from 'react-router-dom';

function Advertise() {
    const navigate = useNavigate();


    const handleClick = (e) => {
        const productTitle = e.target.getAttribute('data-product');
        const product = AllProductData[productTitle];   
        navigate(`/${product.productTitle}`, {state: {product: product}});
        window.scrollTo(0,0);
    }


    return(
        <section className={styles.container}>

            <div className={styles.productOne}>
                <img src={images["zx9speakers"]} className={styles.productImage}/>
                <div className={styles.productInfo}>
                    <h1>
                        ZX9 SPEAKER
                    </h1>
                    <p>
                        Upgrade to premium speakers that are 
                        phenomenally built to deliver truly 
                        remarkable sound.  
                    </p>
                    <button onClick={handleClick} data-product={'ZX9 SPEAKER'}>
                        SEE PRODUCT
                    </button>
                </div>
            </div>

            <div className={styles.productTwo}>
                <div className={styles.productInfo}>
                    <h1>
                        ZX7 SPEAKER
                    </h1>
                    <button onClick={handleClick} data-product={'ZX7 SPEAKER'}>
                        SEE PRODUCT
                    </button>
                </div>
            </div>
            <div className={styles.productThree}>
                <img src={images["yx1earphones"]} className={styles.productImage}/>                
                <div className={styles.greyBox}>
                    <div className={styles.productInfo}>
                        <h1>
                            YX1 EARPHONES
                        </h1>
                        <button onClick={handleClick} data-product={'YX1 WIRELESS EARPHONES'}> 
                            SEE PRODUCT
                        </button>                             
                    </div>
                   
                </div>
            </div>


        </section>
    )
}

export default Advertise;
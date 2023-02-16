import React from 'react';
import Quantity from './Quantity';
import {useLocation} from 'react-router-dom';
import styles from './styles.module.css';
import image from './image-white-headphones.jpg';



function ProductDetail() {
    const {product} = useLocation();

    return(
        <section className={styles.container}>
            <div className={styles.goBack}>
                <a>
                    Go Back
                </a>
            </div>
            <div className={styles.productBox}>
                <img className={styles.productImage} src={image}/>
                <div className={styles.productDesc}>
                    <p className={styles.newProduct}>
                        NEW PRODUCT
                    </p>
                    <h1 className={styles.title}>
                        XX59 <br/>
                        Headphones  
                    </h1>
                    <p className={styles.desc}>
                        Enjoy your audio almost anywhere 
                        and customize it to your specific tastes 
                        with the XX59 headphones. The stylish yet 
                        durable versatile wireless headset is a 
                        brilliant companion at home or on the move.
                    </p>
                    <p className={styles.price}>
                        $ 899
                    </p>
                    <div className={styles.quantity_and_cartButton}>
                        <Quantity/>
                        <button className={styles.cartButton}>                   
                            ADD TO CART
                        </button>                        
                    </div>
                </div>
            </div>
            <div className={styles.otherDetails}>
                <div className={styles.features}>
                    <h1 className={styles.featuresTitle}>                   {/* this is where i left off, i will need to style these elements*/}
                        FEATURES
                    </h1>
                    <p className={styles.featuresDesc}>
                        Featuring a genuine leather head strap and premium earcups, these headphones deliver superior comfort for those who like to enjoy endless listening. 
                        It includes intuitive controls designed for any situation. Whether you’re taking a business call or just in your own personal space, the auto on/off 
                        and pause features ensure that you’ll never miss a beat.

                        The advanced Active Noise Cancellation with built-in equalizer allow you to experience your audio world on your terms. 
                        It lets you enjoy your audio in peace, but quickly interact with your surroundings when you need to. 
                        Combined with Bluetooth 5. 0 compliant connectivity and 17 hour battery life, the XX99 Mark II headphones gives you superior sound, 
                        cutting-edge technology, and a modern design aesthetic.
                    </p>
                </div>

                <div className={styles.inTheBox}>
                    <h1 className={styles.inTheBoxTitle}>
                        IN THE BOX
                    </h1>
                    <ul className={styles.number}>
                        <li> Headphone Unit</li>
                        <li> Replacement Earcups</li>
                        <li> User Manual</li>
                        <li> 3.5mm 5m Audio Cable</li>
                        <li> Travel Bag</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default ProductDetail;
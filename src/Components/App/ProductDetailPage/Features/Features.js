import React from 'react';
import styles from './styles.module.css';

function Features() {
    return(
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
                <ul className={styles.inTheBoxList}>
                    <li> Headphone Unit</li>
                    <li> Replacement Earcups</li>
                    <li> User Manual</li>
                    <li> 3.5mm 5m Audio Cable</li>
                    <li> Travel Bag</li>
                </ul>
            </div>
        </div>
    )
}

export default Features;
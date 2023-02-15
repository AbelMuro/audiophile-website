import React from 'react';
import styles from './styles.module.css';

function Header(){
    return(
        <section className={styles.headerBackground}>
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
                    <button className={styles.seeProductButton}>
                        SEE PRODUCT
                    </button>
                </div>                      
            </div>
        </section>
    )
}

export default Header;
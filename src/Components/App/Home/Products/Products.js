import React from 'react';
import images from './images';
import styles from './styles.module.css';

function Products() {
    return(
        <section className={styles.container}>
            <div className={styles.flex}>
                <div className={styles.productBox}>
                    <img src={images["headphones"]} className={styles.productImage}/>
                    <h2 className={styles.productTitle}>
                        HEADPHONES
                    </h2>
                    <a className={styles.productLink}>
                        <span className={styles.shop}>SHOP</span>
                        <img src={images["rightArrow"]} className={styles.arrow}/>
                    </a>
                </div>
                <div className={styles.productBox}>
                    <img src={images["speakers"]} className={styles.productImage}/>
                    <h2 className={styles.productTitle}>
                        SPEAKERS
                    </h2>
                    <a className={styles.productLink}>
                        <span className={styles.shop}>SHOP</span>
                        <img src={images["rightArrow"]} className={styles.arrow}/>
                    </a>
                </div>
                <div className={styles.productBox}>
                    <img src={images["earphones"]} className={styles.productImage}/>
                    <h2 className={styles.productTitle}>
                        EARPHONES
                    </h2>
                    <a className={styles.productLink}>
                        <span className={styles.shop}>SHOP</span>
                        <img src={images["rightArrow"]} className={styles.arrow}/>
                    </a>
                </div>

            </div>

        </section>
    )
}

export default Products;
import React from 'react';
import styles from './styles.module.css';
import imageOne from './image-category-page-preview-1.jpg';
import imageTwo from './image-product.jpg';
import imageThree from './image-category-page-preview.jpg'

function OtherProducts() {
    return(
        <div className={styles.container}>
            <h1 className={styles.title}>
                YOU MAY ALSO LIKE
            </h1>
            <div className={styles.product}>           
                <img className={styles.productImage} src={imageOne}/>
                <h2 className={styles.productTitle}>
                    XX99 MARK I
                </h2>
                <button className={styles.seeProductButton}>
                    SEE PRODUCT
                </button>
            </div>
            <div className={styles.product}>
                <img className={styles.productImage} src={imageTwo}/>
                <h2 className={styles.productTitle}>
                    XX59
                </h2>
                <button className={styles.seeProductButton}>
                    SEE PRODUCT
                </button>
            </div>
            <div className={styles.product}>
                <img className={styles.productImage} src={imageThree}/>
                <h2 className={styles.productTitle}>
                    ZX9 SPEAKER
                </h2>
                <button className={styles.seeProductButton}>
                    SEE PRODUCT
                </button>
            </div>
    
        </div>
        )
}

export default OtherProducts;
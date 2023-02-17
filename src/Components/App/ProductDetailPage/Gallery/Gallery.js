import React from 'react';
import styles from './styles.module.css';

function Gallery({product}) {
    return(
        <div className={styles.otherImages}>
            <img src={product.galleryOne} className={styles.imageOne}/>
            <img src={product.galleryTwo} className={styles.imageTwo}/>
            <img src={product.galleryThree} className={styles.imageThree}/>
        </div>  
    )
}

export default Gallery;
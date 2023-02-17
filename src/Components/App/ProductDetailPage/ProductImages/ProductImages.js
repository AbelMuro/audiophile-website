import React from 'react';
import styles from './styles.module.css';
import imageOne from './image-gallery-1.jpg';
import imageTwo from './image-gallery-2.jpg';
import imageThree from './image-gallery-3.jpg';

function ProductImages() {
    return(
        <div className={styles.otherImages}>
            <img src={imageOne} className={styles.imageOne}/>
            <img src={imageTwo} className={styles.imageTwo}/>
            <img src={imageThree} className={styles.imageThree}/>
        </div>  
    )
}

export default ProductImages;
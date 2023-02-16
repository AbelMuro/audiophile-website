import React from 'react';
import images from './images';
import styles from './styles.module.css';

function Products() {
    return(
        <section className={styles.container}>
            <div className={styles.productBox}>
                <img src={images['XX99MarkTwo']} className={styles.productImage}/>
                <div className={styles.productInfo}>
                    <h2>
                        NEW PRODUCT
                    </h2>
                    <h1 className={styles.productTitle}>
                        XX99 MARK II HEADPHONES
                    </h1>
                    <p className={styles.productDesc}>
                        The new XX99 Mark II headphones is the pinnacle of pristine audio. 
                        It redefines your premium headphone experience by reproducing the balanced 
                        depth and precision of studio-quality sound.
                    </p>
                    <button className={styles.seeProductButton}>
                        SEE PRODUCT                        
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Products;
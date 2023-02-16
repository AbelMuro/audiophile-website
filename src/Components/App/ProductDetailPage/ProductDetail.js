import React from 'react';
import {useLocation} from 'react-router-dom';
import styles from './styles.module.css';
import image from './image-white-headphones.jpg';

function ProductDetail() {
    const {product} = useLocation();

    return(
        <section className={styles.container}>
            <div className={styles.productBox}>
                <img className={styles.productImage} src={image}/>
                <div className={styles.productDesc}>
                    <h1 className={styles.title}>
                        XX59
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
                    <div>
                        <div className={styles.quantity}>

                        </div>
                        <button className={styles.cartButton}>
                            ADD TO CART
                        </button>                        
                    </div>

                </div>
            </div>
        </section>
    )
}

export default ProductDetail;
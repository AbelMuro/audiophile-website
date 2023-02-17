import React from 'react';
import Quantity from './Quantity';
import styles from './styles.module.css';

function Product({product}) {


    return(
        <div className={styles.productBox}>
            <img className={styles.productImage} src={product.image}/>
            <div className={styles.productDesc}>
                {product.isNewProduct ? 
                    <p className={styles.newProduct}>
                        NEW PRODUCT
                    </p> : <></>
                }
                <h1 className={styles.title}>
                    {product.title} <br/>
                    {product.type} 
                </h1>
                <p className={styles.desc}>
                    {product.desc}
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
    )
}

export default Product;
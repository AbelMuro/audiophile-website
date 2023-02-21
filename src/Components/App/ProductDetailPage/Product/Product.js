import React, {useRef} from 'react';
import Quantity from './Quantity';
import styles from './styles.module.css';
import {useDispatch} from 'react-redux';

function Product({product}) {
    const dispatch = useDispatch();
    const quantity = useRef();


    const handleCart = () => {
        window.scrollTo(0,0);
        dispatch({type: 'remove item', payload: {id: product.id}});
        dispatch({type: "add item", 
            payload: {
                id: product.id,
                title: product.cartTitle, 
                price: product.productPrice, 
                quantity: quantity.current.state, 
                image: product.productImage}});
        dispatch({type: 'open', payload: {}});
    }


    return(
        <div className={styles.productBox}>
            <img className={styles.productImage} src={product.productImage}/>
            <div className={styles.productDesc}>
                {product.isNewProduct ? 
                    <p className={styles.newProduct}>
                        NEW PRODUCT
                    </p> : <></>
                }
                <h1 className={styles.title}>
                    {product.productTitle} <br/>
                    {product.productType} 
                </h1>
                <p className={styles.desc}>
                    {product.productDesc}
                </p>
                <p className={styles.price}>
                    $ {product.productPrice.toLocaleString()}
                </p>
                <div className={styles.quantity_and_cartButton}>
                    <Quantity ref={quantity}/>
                    <button className={styles.cartButton} onClick={handleCart}>                   
                        ADD TO CART
                    </button>                        
                </div>
            </div>
        </div>
    )
}

export default Product;
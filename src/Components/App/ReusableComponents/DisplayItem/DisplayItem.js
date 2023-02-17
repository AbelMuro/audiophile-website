import React, {useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './styles.module.css';

function Products({product, isReverse}) {
    const productContainer = useRef();
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(`/${product.productTitle}`, {state : {product: product}});
        window.scrollTo(0,0);
    }

    useEffect(() => {
        if(isReverse)
            productContainer.current.style.flexDirection = "row-reverse"; 
    }, [])

    return(

            <div className={styles.productBox} ref={productContainer}>
                <img src={product.productImage} className={styles.productImage}/>
                <div className={styles.productInfo}>
                    {product.isNewProduct ? <h2>
                        NEW PRODUCT
                    </h2> : <></>}
                    <h1 className={styles.productTitle}>
                        {product.productTitle}<br/>
                        {product.productType}
                    </h1>
                    <p className={styles.productDesc}>
                        {product.productDesc}
                    </p>
                    <button className={styles.seeProductButton} onClick={handleClick}>
                        SEE PRODUCT                        
                    </button>
                </div>
            </div>

    )
}

export default Products;
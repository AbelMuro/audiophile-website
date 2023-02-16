import React, {useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './styles.module.css';

function Products({isNewProduct, productImage, productTitle, productDesc, isReverse, navigateTo}) {
    const product = useRef();
    
    const handleClick = () => {

    }

    useEffect(() => {
        if(isReverse)
            product.current.style.flexDirection = "row-reverse";
    }, [])

    return(

            <div className={styles.productBox} ref={product}>
                <img src={productImage} className={styles.productImage}/>
                <div className={styles.productInfo}>
                    {isNewProduct ? <h2>
                        NEW PRODUCT
                    </h2> : <></>}
                    <h1 className={styles.productTitle}>
                        {productTitle}
                    </h1>
                    <p className={styles.productDesc}>
                        {productDesc}
                    </p>
                    <button className={styles.seeProductButton} onClick={handleClick}>
                        SEE PRODUCT                        
                    </button>
                </div>
            </div>

    )
}

export default Products;
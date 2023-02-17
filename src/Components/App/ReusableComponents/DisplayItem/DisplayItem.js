import React, {useEffect, useRef} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './styles.module.css';

function Products({isNewProduct, productImage, productType, productTitle, productDesc, isReverse, productObject}) {
    const product = useRef();
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(`/${productTitle} ${productType}`, {state : {product: {
            title: productTitle,
            type: productType,
            image: productImage,
            desc: productDesc,
            isNewProduct: isNewProduct,
        }}})
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
                        {productTitle}<br/>
                        {productType}
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
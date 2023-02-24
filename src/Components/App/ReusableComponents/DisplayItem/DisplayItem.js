import React, {useEffect, useRef} from 'react';
import {useMediaQuery} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import styles from './styles.module.css';

function Products({product, isReverse}) {
    const tablet = useMediaQuery('(max-width: 768px)');
    const productContainer = useRef();
    const productImage = useRef();
    const navigate = useNavigate();
    
    const handleClick = () => {
        navigate(`/${product.productTitle}`, {state : {product: product}});
        window.scrollTo(0,0);
    }

    useEffect(() => {
        if(isReverse)
            productContainer.current.style.flexDirection = "row-reverse"; 
    }, [])

    useEffect(() => {
        if(!productContainer.current || !productImage.current) return;

        if(tablet){
            productContainer.current.style.flexDirection = 'column';
            productImage.current.src = product['productImageTablet'];
        }
        else {
            productContainer.current.style.flexDirection = isReverse ? 'row-reverse' : 'row';
            productImage.current.src = product['productImage']
        }

    }, [tablet])


    return(

            <div className={styles.productBox} ref={productContainer}>
                <img src={product.productImage} className={styles.productImage} ref={productImage}/>
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
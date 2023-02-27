import React, {useEffect, useRef} from 'react';
import {useMediaQuery} from '@mui/material';
import AllProductData from './../../AllProductData';
import {useNavigate} from 'react-router-dom';
import styles from './styles.module.css';

function OtherProducts({product}) {
    const allImages = useRef([]); 
    const tablet = useMediaQuery('(max-width: 800px)');
    const mobile = useMediaQuery('(max-width: 580px)');
    const navigate = useNavigate();


    const handleClick = (e) => {
        let productChoosen = e.target.getAttribute('data-product');
        productChoosen = AllProductData[productChoosen];
        navigate(`/${product.productTitle}`, {state : {product: productChoosen}});
        window.scrollTo(0,0);
    }

    useEffect(() => {
        allImages.current.map((image, i) => {
            if(mobile)
                image.src = product.youMayAlsoLike[i].imageMobile;
            if(tablet)
                image.src = product.youMayAlsoLike[i].imageTablet;
            else 
                image.src = product.youMayAlsoLike[i].image;
        })
        
    }, [tablet, mobile, product])


    return(
        <div className={styles.container}>
            <h1 className={styles.title}>
                YOU MAY ALSO LIKE
            </h1>
            {product.youMayAlsoLike.map((item, i) => {
                   return(
                        <div className={styles.product} key={i}>           
                            <img className={styles.productImage} src={item.image} ref={(ref) => {allImages.current[i] = ref}} />
                            <h2 className={styles.productTitle}>
                                {item.title}
                            </h2>
                            <button className={styles.seeProductButton} onClick={handleClick} data-product={item.product}>
                                SEE PRODUCT
                            </button>
                        </div>
                   ) 
            })}
        </div>
        )
}

export default OtherProducts;
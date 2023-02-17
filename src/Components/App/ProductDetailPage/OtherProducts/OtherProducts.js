import React from 'react';
import AllProductData from './../../AllProductData';
import {useNavigate} from 'react-router-dom';
import styles from './styles.module.css';

function OtherProducts({product}) {
    const navigate = useNavigate();

    const handleClick = (e) => {
        let productChoosen = e.target.getAttribute('data-product');
        productChoosen = JSON.parse(productChoosen);
        navigate(`/${product.productTitle}`, {state : {product: productChoosen}});
        window.scrollTo(0,0);
    }

    return(
        <div className={styles.container}>
            <h1 className={styles.title}>
                YOU MAY ALSO LIKE
            </h1>
            {product.youMayAlsoLike.map((item, i) => {
                   return(
                        <div className={styles.product} key={i}>           
                            <img className={styles.productImage} src={item.image}/>
                            <h2 className={styles.productTitle}>
                                {item.title}
                            </h2>
                            <button className={styles.seeProductButton} onClick={handleClick} data-product={JSON.stringify(AllProductData[`${item.product}`])}>
                                SEE PRODUCT
                            </button>
                        </div>
                   ) 
            })}
        </div>
        )
}

export default OtherProducts;
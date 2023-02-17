import React from 'react';
import Product from './Product';
import Features from './Features';
import ProductImages from './ProductImages';
import OtherProducts from './OtherProducts';
import Categories from './../ReusableComponents/Categories';
import {useLocation} from 'react-router-dom';
import styles from './styles.module.css';

function ProductDetail() {
    const {state} = useLocation();
    const product = state.product;          //flattening

    return(
        <section className={styles.container}>
            <div className={styles.goBack}>
                <a>
                    Go Back
                </a>
            </div>
            <Product product={product}/>
            <Features product={product}/>
            <ProductImages product={product}/>
            <OtherProducts product={product}/>
            <Categories/>
        </section>
    )
}

export default ProductDetail;
import React from 'react';
import Product from './Product';
import Features from './Features';
import Gallery from './Gallery';
import OtherProducts from './OtherProducts';
import Categories from './../ReusableComponents/Categories';
import CompanyMessage from './../ReusableComponents/CompanyMessage';
import {useLocation, useNavigate} from 'react-router-dom';
import styles from './styles.module.css';

function ProductDetail() {
    const {state} = useLocation();
    const product = state.product;          //flattening
    const navigate = useNavigate();

    const handleClick = () => {
        let category = product.productType;       
                    
        if(category == 'EARPHONES')
            navigate(`/Earphones`);
        else if(category == 'HEADPHONES')
            navigate('/Headphones');
        else if(category == 'SPEAKER')
            navigate('/Speakers')
    }       
  
    return(
        <section className={styles.container}>
            <div className={styles.goBack} >
                <a onClick={handleClick}>
                    Go Back
                </a>
            </div>
            <Product product={product}/>
            <Features product={product}/>
            <Gallery product={product}/>
            <OtherProducts product={product}/>
            <Categories/>
            <CompanyMessage/>
        </section>
    )
}

export default ProductDetail;
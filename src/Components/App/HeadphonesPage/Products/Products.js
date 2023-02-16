import React from 'react';
import DisplayItem from './../../ReusableComponents/DisplayItem';
import {useNavigate} from 'react-router-dom';
import images from './images';
import styles from './styles.module.css';

function Products() {
    const handleXX99Product = () => {
        
    }

    return(
        <section className={styles.container}>
                <DisplayItem 
                    isNewProduct={true}
                    productImage={images['XX99MarkTwo']}
                    productTitle="XX99 MARK II"
                    productType="HEADPHONES"
                    productDesc="The new XX99 Mark II headphones is the pinnacle of pristine audio. 
                    It redefines your premium headphone experience by reproducing the balanced 
                    depth and precision of studio-quality sound."
                    isReverse={false}
                />
                <DisplayItem
                    isNewProduct={false}
                    productImage={images['XX99MarkOne']}
                    productTitle="XX99 MARK I"
                    productType="HEADPHONES"
                    productDesc="As the gold standard for headphones, the classic XX99 Mark I offers 
                    detailed and accurate audio reproduction for audiophiles, mixing engineers, 
                    and music aficionados alike in studios and on the go."
                    isReverse={true}
                />
                <DisplayItem
                    isNewProduct={false}
                    productImage={images['XX59Headphones']}
                    productTitle="XX59"
                    productType="HEADPHONES"
                    productDesc="Enjoy your audio almost anywhere and customize it to your 
                    specific tastes with the XX59 headphones. 
                    The stylish yet durable versatile wireless 
                    headset is a brilliant companion at home or on the move."
                    isReverse={false}
                />
        </section>
    )
}

export default Products;
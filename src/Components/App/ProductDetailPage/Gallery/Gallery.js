import React, {useEffect, useRef} from 'react';
import {useMediaQuery} from '@mui/material';
import styles from './styles.module.css';

function Gallery({product}) {
    const galleryOne = useRef();
    const galleryTwo = useRef();
    const galleryThree = useRef();
    const tablet = useMediaQuery('(max-width: 800px)');
    const mobile = useMediaQuery('(max-width: 580px)');


    useEffect(() => {
        if(tablet){
            galleryOne.current.src = product.galleryOneTablet;
            galleryTwo.current.src = product.galleryTwoTablet;
            galleryThree.current.src = product.galleryThreeTablet;
        }
        else{
            galleryOne.current.src = product.galleryOne;
            galleryTwo.current.src = product.galleryTwo;
            galleryThree.current.src = product.galleryThree;
        }
            
    }, [tablet])


    useEffect(() => {
        if(mobile){
            galleryOne.current.src = product.galleryOneMobile;
            galleryTwo.current.src = product.galleryTwoMobile;
            galleryThree.current.src = product.galleryThreeMobile;
        }
        else{
            galleryOne.current.src = product.galleryOneTablet;
            galleryTwo.current.src = product.galleryTwoTablet;
            galleryThree.current.src = product.galleryThreeTablet;
        }

    }, [mobile])

    return(
        <div className={styles.otherImages}>
            <img src={product.galleryOne} className={styles.imageOne} ref={galleryOne}/>
            <img src={product.galleryTwo} className={styles.imageTwo} ref={galleryTwo}/>
            <img src={product.galleryThree} className={styles.imageThree} ref={galleryThree}/>
        </div>  
    )
}

export default Gallery;
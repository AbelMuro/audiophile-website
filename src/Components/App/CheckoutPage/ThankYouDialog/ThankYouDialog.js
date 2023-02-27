import React, {useState, useEffect, useRef} from 'react';
import {useMediaQuery} from '@mui/material';
import {Dialog, DialogTitle, DialogContent, DialogActions, Stack} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import checkIcon from './images/icon-order-confirmation.svg';
import styles from './styles.module.css';
import {useGrandTotalRef, useAllItemsRef} from './RefHooks';

function ThankYouDialog({open}) {
    const mobile = useMediaQuery('(max-width: 570px)');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const items = useSelector(state => state.cart.items);
    const [itemsDisplayed, setItemsDisplayed] = useState([items[0]]);
    const [toggle, setToggle] = useState(false);
    const displayMoreItemsLink = useRef();
    const [grandTotal] = useGrandTotalRef(items.length, mobile);        //returns a callback that accepts a node, which we can use to style based on a condition
    const [allItems] = useAllItemsRef(items.length);


    const handleClick = () => {
        navigate('/');
        dispatch({type: 'remove all', payload: {}}); 
    }

    const handleItems = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
        if(!displayMoreItemsLink.current) return;                       //this ref is undefined on the first render

        if(toggle){
            setItemsDisplayed(items);
            displayMoreItemsLink.current.innerHTML = 'View less';
        }
        else{
            setItemsDisplayed([items[0]])
            displayMoreItemsLink.current.innerHTML = `and ${items.length-1} other item(s)`;
        }
            
    }, [toggle])


    return(            
        <Dialog open={open}>
            <DialogTitle sx={mobile ? {padding: '32px 32px 24px 32px'} : {padding: '48px 48px 33px 48px'}}>
                <Stack>
                    <img src={checkIcon} className={styles.checkIcon}/>
                    <h1 className={styles.submitTitle}>
                        THANK YOU <br/>
                        FOR YOUR ORDER
                    </h1>
                    <p className={styles.message}>
                        You will receive an email confirmation shortly.
                    </p>
                </Stack>
            </DialogTitle>
            <DialogContent sx={mobile ? {padding: '32px 32px 23px 32px'} : {padding: '48px'}}>
                <section className={styles.orderConfirmed}>                                  
                        <div className={styles.allItemsContainer}>
                            <div className={styles.items}ref={allItems}>
                                {itemsDisplayed.map((item, i) => {
                                    return(
                                        <div className={styles.item} key={i}>   
                                            <img src={item.image} className={styles.itemImage}/>
                                            <div className={styles.itemInfo}>
                                                <h2 className={styles.itemTitle}>
                                                    {item.title}
                                                </h2>
                                                <p className={styles.itemPrice}>
                                                    $ {item.price.toLocaleString()}
                                                </p>
                                            </div>
                                            <p className={styles.itemQuantity}>
                                                x{item.quantity}
                                            </p>
                                        </div>
                                    )
                                })}
                            </div>
                            {items.length != 1 ? 
                            <a className={styles.displayMoreItems} onClick={handleItems} ref={displayMoreItemsLink}>   
                                {`and ${items.length-1} other item(s)`}
                            </a> : <></>}
                        </div>                            
    

                    <div className={styles.grandTotalContainer} ref={grandTotal}>
                        <div className={styles.grandTotal}>
                            <h2 className={styles.grandTotalTitle}>
                                GRAND TOTAL
                            </h2>
                            <p className={styles.grandTotalAmount}>
                                $5,446
                            </p>
                        </div>
                    </div>
                </section>
            </DialogContent>
            <DialogActions sx={mobile ? {padding: '0px 32px 32px 32px'} : {padding: '0px 48px 48px 48px'}}>
                <button className={styles.backHomeButton} onClick={handleClick}>
                        BACK TO HOME
                </button>
            </DialogActions>
        </Dialog>
    )
}

export default ThankYouDialog;
import React, {useEffect} from 'react';
import Total from './Total';
import Quantity from './Quantity';
import {Dialog, DialogContent, DialogTitle, DialogActions, Stack} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import {v4 as uuid} from 'uuid'
import {styled} from '@mui/system';
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles.module.css';

const PositionDialog = styled(Dialog)`
    & .MuiPaper-root {
        position: relative;  
        top: -160px;        
        right: -350px;          
    } 
`

const StyledDialogContent = styled(DialogContent)`
    box-sizing: border-box;
    padding: 0px 31px 24px 33px;
    width: 377px;
`

const StyledDialogActions = styled(DialogActions)`
    padding: 0px 31px 31px 33px; 
`


function Cart() {
    const open = useSelector(state => state.open);
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleRemove = () => {
        dispatch({type: 'remove all'});
    }

    const handleCheckout = () => {
        dispatch({type: 'close'});
        navigate('/Checkout');
        window.scrollTo(0,0);
    }

    useEffect(() => {
        const clickHandler = (e) => {
            if(e.target.matches('.MuiDialog-container'))
                dispatch({type: 'close'});
        }
        document.addEventListener('click', clickHandler);
        return () => {
            document.removeEventListener('click', clickHandler);
        }
    }, [])

    return(
        <PositionDialog open={open}>
            <DialogTitle sx={{padding: '31px'}}>
                <Stack flexDirection={'row'} justifyContent={'space-between'} sx={{width: '100%'}}>
                    <h2 className={styles.title}>
                        CART {`(${items.length})`}
                    </h2>
                    {items.length ? 
                        <a className={styles.removeAll} onClick={handleRemove}>
                            Remove all
                        </a> : <></> }                   
                </Stack>
            </DialogTitle>
            <StyledDialogContent>
                <section className={styles.cart}>
                    {items.length ? items.map((item) => {
                        return(
                            <div className={styles.itemInCart} key={uuid()}>
                                <div className={styles.flexItemOne}>
                                    <img className={styles.itemImage} src={item.image}/>
                                    <div className={styles.itemInfo}>
                                        <h3 className={styles.itemTitle}>
                                            {item.title}
                                        </h3>
                                        <p className={styles.itemPrice}>
                                            ${item.price}
                                        </p>
                                    </div>                                    
                                </div>
                                <Quantity itemID={item.id} itemQuantity={item.quantity}/>
                            </div>
                        )
                    }) : <div className={styles.message}>
                            Cart is empty.
                        </div> 
                    }                    
                </section>
                {items.length ? <Total items={items}/> : <></>}
            </StyledDialogContent>
            <StyledDialogActions >
                <button className={styles.checkout} onClick={handleCheckout} disabled={items.length ? false : true}>
                    CHECKOUT
                </button>
            </StyledDialogActions >
        </PositionDialog>
    )
}

export default Cart;
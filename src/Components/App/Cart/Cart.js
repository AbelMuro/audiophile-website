import React, {useEffect, useMemo} from 'react';
import Total from './Total';
import Quantity from './Quantity';
import {Dialog, DialogContent, DialogTitle, DialogActions, Stack} from '@mui/material';
import {useNavigate, useLocation} from 'react-router-dom';
import {v4 as uuid} from 'uuid'
import {styled} from '@mui/system';
import {useSelector, useDispatch} from 'react-redux';
import {useMediaQuery} from '@mui/material';
import styles from './styles.module.css';


function Cart() {
    const mobile = useMediaQuery('(max-width: 440px)');
    const desktop = useMediaQuery('(max-width: 1165px)');
    const open = useSelector(state => state.open);
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const StyledDialogContent = useMemo(() => styled(DialogContent)`
        box-sizing: border-box;
        padding: 0px 31px 24px 33px;
        width: 100%;
    `, [])

    const StyledDialogActions = useMemo(() => styled(DialogActions)`
        padding: 0px 31px 31px 33px; 
    `, [])

    const handleRemove = () => {
        dispatch({type: 'remove all', payload: {}});
        if(location.pathname == '/Checkout')
            navigate('/')
    }

    const handleCheckout = () => {
        dispatch({type: 'close', payload: {}});
        navigate('/Checkout');
        window.scrollTo(0,0);
    }

    useEffect(() => {
        const clickHandler = (e) => {
            if(e.target.matches('.MuiDialog-container'))            //if the user clicks on anything BESIDES the dialog, then the dialog will close
                dispatch({type: 'close', payload: {}});
        }
        document.addEventListener('click', clickHandler);
        return () => {
            document.removeEventListener('click', clickHandler);
        }
    }, [])

    return(
        <Dialog open={open} PaperProps={{
            sx: {
                width : `${mobile ? '327px' : '377px'}`,
                position: 'absolute',  
                top: `${desktop ? '78px' : '110px'}`,        
                right: `${desktop ? '-5px' : '0px'}`,
                left: `${desktop ? 'initial' : '0px'}`,
                transform: `${desktop ? '' : 'translateX(97%)'}`,   
                margin: `${desktop ? '' : 'auto'}`
            }
        }}>
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
                                            ${item.price.toLocaleString()}
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
            <StyledDialogActions>
                <button className={styles.checkout} onClick={handleCheckout} disabled={items.length ? false : true}>
                    CHECKOUT
                </button>
            </StyledDialogActions >
        </Dialog>
    )
}

export default Cart;
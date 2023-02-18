import React from 'react';
import {Dialog, DialogContent, DialogTitle, DialogActions, Stack} from '@mui/material';
import {v4 as uuid} from 'uuid'
import {styled} from '@mui/system';
import {useSelector, useDispatch} from 'react-redux';
import styles from './styles.module.css';

const StyledDialog = styled(Dialog)`
    position: absolute;
    top: 10px;
`


const StyledDialogContent = styled(DialogContent)`
    box-sizing: border-box;
    width: 377px;
    height: 488px;
`


function Cart() {
    const open = useSelector(state => state.open);
    const items = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    return(
        <StyledDialog open={open} sx={{padding: '31px'}}>
            <DialogTitle>
                <Stack flexDirection={'row'} justifyContent={'space-between'} sx={{width: '100%'}}>
                    <h2 className={styles.title}>
                        CART
                    </h2>
                    <a className={styles.removeAll}>
                        Remove All
                    </a>                    
                </Stack>
            </DialogTitle>
            <StyledDialogContent>
                <section className={styles.cart}>
                    { items.length ? items.map((item) => {
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
                                <div className={styles.flexItemTwo}>
                                    quantity
                                </div>

                            </div>
                        )
                    }) : <></> }                    
                </section>

            </StyledDialogContent>
            <DialogActions>
                <button onClick={() => {
                    dispatch({type: 'close'})
                }}>
                    close
                </button>
            </DialogActions>
        </StyledDialog>
    )
}

export default Cart;
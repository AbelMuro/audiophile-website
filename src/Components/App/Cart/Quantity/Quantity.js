import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styles from './styles.module.css';

function Quantity({itemID, itemQuantity}) {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState(itemQuantity);

    const handleDecrement = () => {
        if(quantity > 1){
            setQuantity(quantity - 1);
            dispatch({type: 'change item', id: itemID, quantity: quantity - 1});  
        }
        else{
            dispatch({type: 'remove item', id: itemID})
        }
    }

    const handleIncrement = () => {
        setQuantity(quantity + 1);
        dispatch({type: 'change item', id: itemID, quantity: quantity + 1})
    }

    return(
        <section className={styles.container}>
            <div className={styles.decrement} onClick={handleDecrement}>
                <RemoveIcon sx={{fontSize: '13px'}} />                
            </div>
            <div className={styles.quantity}>
                {quantity}
            </div>
            <div className={styles.increment} onClick={handleIncrement}>
                <AddIcon sx={{fontSize: '13px'}}/>                
            </div>
        </section>
        )
}

export default Quantity
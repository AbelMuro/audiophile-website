import React, {useState, useEffect, forwardRef, useImperativeHandle} from 'react';
import {styled} from '@mui/system'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import styles from './styles.module.css';


const Increment = styled(AddIcon)`
    font-size: 13px;
`

const Decrement = styled(RemoveIcon)`
    font-size: 13px;
`

const Quantity = forwardRef(({product}, ref) =>{
    const [quantity, setQuantity] = useState(1);

    const handleIncrement = () => {
        setQuantity(quantity + 1);
    }

    const handleDecrement = () => {
        if(quantity > 1)
            setQuantity(quantity - 1);
    }

    useImperativeHandle(ref, () => ({
        get state() {
            return quantity;
        }
    }))

    useEffect(() => {
        setQuantity(1);
    }, [product])

    return(
        <div className={styles.quantity}>
            <div className={styles.decrementBox} onClick={handleDecrement}>
                <Decrement/>
            </div>
            <p className={styles.currentQuantity}>
                {quantity}
            </p>                            
            <div className={styles.incrementBox} onClick={handleIncrement}>
                <Increment/> 
            </div>                           
        </div>
    )
})

export default Quantity;
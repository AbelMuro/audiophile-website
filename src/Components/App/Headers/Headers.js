import React from 'react';
import styles from './styles.module.css';

function Header({title}) {
    return(
        <div className={styles.header}>
            <h1 className={styles.title}>
                {title}
            </h1>
        </div>
        )
}

export default Header;
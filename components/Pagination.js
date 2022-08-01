import React from 'react';
import styles from "../styles/Pagination.module.scss"

const Pagination = () => {
    return (
        <div className={styles.paginationBlock}>
            <p className={styles.paginationBlock__text}>Next</p>
            <p className={styles.paginationBlock__symbol}>&#8595;</p>
        </div>
    );
};

export default Pagination;

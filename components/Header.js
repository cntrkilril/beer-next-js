import React from 'react';
import styles from "../styles/Header.module.scss"
import SearchForm from "./SearchForm";
import BottleIcon from "./icons/BottleIcon";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.headingBlock}>
                <BottleIcon width={"2.5rem"} height={"2.5rem"}/>
                <h2 className={styles.headingBlock__text}>Beers</h2>
            </div>
            <SearchForm/>
        </header>
    );
};

export default Header;

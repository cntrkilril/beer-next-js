import React from 'react';
import styles from "../styles/List.module.scss";
import BeerCard from "./BeerCard";

const SearchedList = ({props}) => {
    return (
        <div className={styles.mainBlock}>
            {
                props.beers.map(item =>
                    <BeerCard item={item} key={item.name}/>
                )
            }
        </div>
    );
};

export default SearchedList;

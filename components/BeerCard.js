import React from 'react';
import styles from "../styles/BeerCard.module.scss"
import Link from "next/link";

const BeerCard = ({item, deleteScroll}) => {

    return (
        <Link href={`beers/${item.id}`}>
            <a onClick={deleteScroll} className={"card" + " " + styles.beerCard}>
                <div className={styles.cardBlockImage}>
                    <img src={item.image_url} className={styles.cardBlockImage__image} alt={`Beer named ${item.name}`}/>
                </div>
                <div className="">
                    <h3 className={"card-title" + ' ' + styles.cardBlockText__title}>{item.name}</h3>
                    <p className={styles.cardBlockText__text}>{item.description.length > 140 ? item.description.slice(0, 140) + '...' : item.description}</p>
                </div>
            </a>
        </Link>
    );
};

export default BeerCard;

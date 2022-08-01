import React, {useContext, useEffect, useState} from 'react';
import styles from "../../styles/BeersId.module.scss"
import Link from "next/link";
import {useRouter} from "next/router";
import {BeersContext} from "../_app";

function User() {

    const [beer, setBeer] = useState({})
    const [fetching, setFetching] = useState(false)
    const {query} = useRouter()

    const context = useContext(BeersContext)

    useEffect(() => {
        fetchingBeer()
    }, [])

    const fetchingBeer = async () => {
        const response = await fetch(`https://api.punkapi.com/v2/beers/${query.id}`)
        setBeer({...(await response.json())[0]})
        setFetching(true)
    }

    const defaultBeer = async () => {
        await context.clearBeers()
    }

    return (
        <div className={styles.BeerId}>
            {
                !fetching
                    ?
                    <p className={styles.BeersIdBlockHeadingBlockTextBlock__tagline}>Загрузка...</p>
                    :
                    <>
                        <Link href='/'>
                            <a onClick={defaultBeer}
                               className={"btn btn-outline-secondary " + styles.BeerId__link}>Back</a>
                        </Link>
                        <div className="card">
                            <div className={styles.BeersIdBlock}>
                                <img className={styles.BeersIdBlock__img} src={beer.image_url}/>
                                <div className={styles.BeersIdBlockHeadingBlockTextBlock}>
                                    <h2 className={styles.BeersIdBlockHeadingBlockTextBlock__title}>{beer.name}</h2>
                                    <p className={styles.BeersIdBlockHeadingBlockTextBlock__tagline}>{beer.tagline}</p>
                                    <p className={styles.BeersIdBlockHeadingBlockTextBlock__abv}>Alcohol by
                                        Volume: {beer.abv}%</p>
                                    <p className={styles.BeersIdBlockHeadingBlockTextBlock__text}>{beer.description}</p>
                                    <p className={styles.BeersIdBlockHeadingBlockTextBlock__titleList}>Food pairing</p>
                                    <ul className={styles.ListFoodPairing}>
                                        {
                                            beer.food_pairing.map((item) =>
                                                <li className={styles.ListFoodPairing__item} key={item}>{item}</li>
                                            )
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </>
            }
        </div>
    );
};

export default User;

import {useContext, useEffect, useRef, useState} from "react";
import {BeersContext} from "../pages/_app";
import styles from '../styles/List.module.scss'
import BeerCard from "../components/BeerCard";
import Pagination from "../components/Pagination";

export default function Home(props) {

    const page = useRef(1)
    const render = useRef(false)

    const context = useContext(BeersContext)

    useEffect(() => {
        if (!props.search.current) {
            document.addEventListener('scroll', scrollHandler)
            if (!render.current) {
                context.getBeers(`?page=${page.current}&per_page=12`)
            }
        }
        render.current = true
    }, [props.search.current])

    const addBeers = () => {
        page.current = page.current + 1
        if (props.endBeers.current || props.search.current) {
            page.current = 1
            return document.removeEventListener("scroll", scrollHandler)
        }
        context.getBeers(`?page=${page.current}&per_page=12`)
    }

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - window.innerHeight - e.target.documentElement.scrollTop < 10) {
            setTimeout(addBeers, 500)
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.mainBlock}>
                {
                    props.beers.map(item =>
                        <BeerCard item={item} key={item.name}/>
                    )
                }
            </div>
            {
                (!props.endBeers.current && !props.search.current) &&
                <Pagination/>
            }
        </div>
    )
}

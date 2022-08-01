import {useContext, useEffect, useRef} from "react";
import {BeersContext} from "../pages/_app";
import styles from '../styles/List.module.scss'
import BeerCard from "../components/BeerCard";
import Pagination from "../components/Pagination";

export default function Home(props) {

    const render = useRef(false)

    const context = useContext(BeersContext)

    useEffect(() => {
        if (!props.search.current) {
            document.addEventListener('scroll', scrollHandler, true)
            if (!render.current) {
                context.getBeers(`?page=${props.pages.current}&per_page=12`)
            }
        }
        render.current = true
    }, [props.search.current])

    const addBeers = async () => {
        await context.addPage()
        if (props.endBeers.current || props.search.current) {
            return deleteScroll()
        }
        await context.getBeers(`?page=${props.pages.current}&per_page=12`)
    }

    const deleteScroll = async () => {
        await document.removeEventListener("scroll", scrollHandler, true)
    }

    async function scrollHandler(e) {
        if (e.target.documentElement.scrollHeight - window.innerHeight - e.target.documentElement.scrollTop < 10) {
            setTimeout(addBeers, 500)
        }
    }

    return (
        <div className={styles.main}>
            <div className={styles.mainBlock}>
                {
                    props.beers.map(item =>
                        <BeerCard item={item} key={item.name} deleteScroll={deleteScroll}/>
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

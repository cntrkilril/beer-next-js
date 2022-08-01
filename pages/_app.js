import '../styles/globals.css'
import Head from "next/head";
import Header from "../components/Header";
import React, {useRef, useState} from "react";

export const BeersContext = React.createContext([])

function MyApp({Component, pageProps}) {


    const [beers, setBeers] = useState([])
    const endBeers = useRef(false)
    const clickBeer = useRef(0)
    const search = useRef(false)
    const pages = useRef(1)

    const getBeers = async (paramsUrl = '') => {
        const response = await fetch(`https://api.punkapi.com/v2/beers${paramsUrl}`)
        const newBeers = await response.json()
        if (newBeers.length < 12) {
            endBeers.current = true
        }
        setBeers(beers => [...beers, ...newBeers])
    }

    const getSearchedBeers = async (paramsUrl = '') => {
        const response = await fetch(`https://api.punkapi.com/v2/beers${paramsUrl}`)
        const newBeers = await response.json()
        search.current = true
        setBeers([...newBeers])
    }

    const clearBeers = async () => {
        search.current = false
        pages.current = 1
        await setBeers([])
    }

    const addPage = () => {
        pages.current = pages.current + 1
    }

    pageProps.beers = beers
    pageProps.endBeers = endBeers
    pageProps.search = search
    pageProps.pages = pages

    return (
        <BeersContext.Provider value={{getBeers, getSearchedBeers, clearBeers, addPage}}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link
                    href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css"
                    rel="stylesheet"
                    type="text/css"
                />
                <title>Beers</title>
            </Head>
            <div className="">
                <Header/>
                <Component {...pageProps} />
            </div>
        </BeersContext.Provider>
    )
}

export default MyApp

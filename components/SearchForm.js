import React, {useContext, useEffect, useState} from 'react';
import styles from "../styles/SearchForm.module.scss"
import useDebounce from "./hooks/useDebounce";
import {BeersContext} from "../pages/_app";

const SearchForm = () => {

        const [value, setValue] = useState('')

        const context = useContext(BeersContext)

        const debouncedSearch = useDebounce(value, 500)

        const onChange = (e) => {
            setValue(e.target.value)
            if (!e.target.value) {
                context.clearBeers()
                context.getBeers('?page=1&per_page=12')
            }
        }

        useEffect(
            () => {
                if (debouncedSearch) {
                    context.getSearchedBeers(`?beer_name=${value}`)
                }
            },
            [debouncedSearch]
        )
        ;

        return (
            <form className={styles.searchForm}>
                <input className={styles.searchForm__input} placeholder={"Enter the name"} value={value}
                       onChange={(e) => onChange(e)}/>
            </form>
        );
    }
;

export default SearchForm;

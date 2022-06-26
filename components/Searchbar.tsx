import Select from "react-select";
import styles from "../styles/Components/Searchbar.module.css"
import { teams } from "../data/teams"
import { useDispatch } from "react-redux"
import { setSearch } from "../redux/teams";
import { useRouter } from 'next/router'
import { useState } from "react";
import { Searchbar } from "../types";


function Searchbar() {

    const router = useRouter()
    const a = router.pathname
    const dispatch = useDispatch();
    const [value, setValue] = useState<Searchbar[]>();
    function handleSelect(data: any) {
        let a = [];
        for (let i = 0; i < data.length; i++) a.push(data[i].value);
        dispatch(setSearch(a));
        setValue(data)
    }

    return (
        <div className={styles.div1}>
            {a === "/" &&
                <Select
                    options={teams}
                    placeholder="Enter Team(s)"
                    value={value}
                    onChange={handleSelect}
                    isSearchable={true}
                    isMulti
                />
            }
        </div>
    )
}

export default Searchbar
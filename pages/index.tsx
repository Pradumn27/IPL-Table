import { GetStaticProps, NextPage } from "next"
import { useDispatch } from "react-redux";
import Grid from "../components/Grid/Grid"
import { setTeams } from "../redux/teams";
import styles from "../styles/pages/Matches.module.css"

const matches:NextPage = ({teams}:any) => {
    
    const dispatch = useDispatch();
    dispatch(setTeams(teams));
    
    return (
        <>
            <div className={styles.div1}>
                <Grid />
            </div>
        </>
    )
}

export const getStaticProps: GetStaticProps = async(context) => {
    const res = await fetch('https://gist.githubusercontent.com/hdck007/57650c774d9631c097db855bf110a4b6/raw/58b00de2a8c06831fda2f471e1b635a90208a4be/ipl.json')
    const teams = await res.json();
    return {
        props:{
            teams,
        }
    }
}

export default matches
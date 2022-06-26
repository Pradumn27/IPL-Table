import React from 'react'
import GridCol from './GridCol'
import styles from "../../styles/Components/Grid/Grid.module.css"
import { vals } from "../../data/teams"
import { useSelector } from "react-redux"
import { teamSelector } from '../../redux/teams'
import { Team } from '../../types'

function Grid () {

    const { search,teams } = useSelector(teamSelector);

    return (
        <table className={styles.tb}>
            <tbody>
                {
                    teams.length > 0 && teams.map((item:Team, index) => {
                        if (search.length > 0 && (search.includes(item.team1) || search.includes(item.team2))) {
                            return (
                                <tr key={index} className={styles.tr}>
                                    <GridCol key={index} img1={vals.get(teams[index].team1)} img2={vals.get(teams[index].team2)} date={teams[index].date} num={index + 1} winner={teams[index].winner} />
                                </tr>
                            )
                        }
                        else if (search.length == 0 && index % 2 != 0) {
                            return (
                                <tr key={index} className={styles.tr}>
                                    <GridCol key={index-1} img1={vals.get(teams[index - 1].team1)} img2={vals.get(teams[index - 1].team2)} date={teams[index - 1].date} num={index} winner={teams[index - 1].winner} />
                                    <GridCol key={index} img1={vals.get(teams[index].team1)} img2={vals.get(teams[index].team2)} date={teams[index].date} num={index + 1} winner={teams[index].winner} />
                                </tr>
                            )
                        }
                    })
                }

            </tbody>
        </table>
    )
}


export default Grid
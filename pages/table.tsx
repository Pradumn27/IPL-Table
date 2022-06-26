import styles from "../styles/pages/Table.module.css"
import TableCol from "../components/Tablecol"
import { useSelector } from "react-redux"
import { create } from "../utils/CreateTable"
import { vals } from "../data/teams"
import { NextPage } from "next"
import { teamSelector } from "../redux/teams"

const table : NextPage  =() =>{
    const { teams } = useSelector(teamSelector);
    const order = create(teams);

    return (
        <div className={styles.div1}>
            <div className={styles.div2}></div>
            <div className={styles.div3}>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.tr1}>
                            <th className={styles.th3} >
                                <div className={styles.div5}>Team</div>
                            </th>
                            <th className={styles.th4}>
                                <span>M</span>

                            </th>
                            <th className={styles.th4}>
                                <div>
                                    <span>W</span>
                                </div>
                            </th>
                            <th className={styles.th4}>
                                <div>
                                    <span>L</span>
                                </div>
                            </th>
                            <th className={styles.th4}>
                                <div>
                                    <span>Pts</span>
                                </div>
                            </th>
                            <th className={styles.th4} style={{ width: "2rem", minWidth: "2rem" }}>
                                <div>
                                    <span>Last 5</span>
                                </div>
                            </th>
                        </tr>
                        {
                            order.length > 0 &&
                            Object.keys(order[0]).map((key, index) => {
                                let won = order[1].get(key);
                                let matches = order[0][key].length;
                                let plays = order[0][key];
                                return <TableCol key={index} idx={index + 1} team={vals.get(key)} matches={matches} won={won} loss={matches - won} pts={won * 2} one={plays[matches - 5]} two={plays[matches - 4]} three={plays[matches - 3]} four={plays[matches - 2]} five={plays[matches - 1]} />
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div >
    )
}

export default table
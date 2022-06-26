import styles from "../../styles/Components/Grid/GridCol.module.css"
import Image, { ImageLoaderProps } from "next/image"
import { GridCol } from "../../types"

const teamLoader = ({ src, width, quality }:ImageLoaderProps) => {
    return `teams/${src}?w=${width}&q=${quality || 75}`
}

const GridCol = ({ img1, img2, date, num, winner }:GridCol) => {

    return (
        <td className={styles.tdd}>
            <div className={styles.divf}>
                <table className={styles.table}>
                    <tbody className={styles.tbody}>
                        <tr className={`${styles.tr}`}>
                            <td className={styles.td1}></td>
                        </tr>
                        <tr className={`${styles.tr}`}>
                            <td className={`${styles.td2}`} style={{ width: "70%" }} colSpan={5}>
                                <div className={styles.div1}>
                                    <span>{`T20 ${num} of 70`}</span>
                                </div>
                            </td>
                            <td className={styles.td3} colSpan={3} style={{ width: "30%" }}>
                                <div className={styles.div2}>
                                    <span>{date}</span>
                                </div>
                            </td>
                        </tr>
                        <tr className={`${styles.tr} ${styles.tr3}`}>
                            <td className={styles.td4}>
                                <Image loader={teamLoader} src={`${img1}.png`} alt="" className={styles.Image} width="24px" height="24px" />
                            </td>
                            <td className={styles.td5}>
                                <div className={styles.div3}>
                                    <span>{img1}</span>
                                </div>
                            </td>
                        </tr>
                        <tr className={`${styles.tr} ${styles.tr3}`}>
                            <td className={styles.td4}>
                                <Image loader={teamLoader} src={`${img2}.png`} alt="" className={styles.Image} width="24px" height="24px" />
                            </td>
                            <td className={styles.td5}>
                                <div className={styles.div3}>
                                    <span>{img2}</span>
                                </div>
                            </td>
                        </tr>
                        <tr className={`${styles.tr} ${styles.tr4}`}>{winner != null ? <div className={styles.divt}>{winner} won</div> : ""}</tr>
                    </tbody>
                </table>
            </div>
        </td>
    )
}

export default GridCol
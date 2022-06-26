import styles from "../styles/Components/tableCol.module.css"
import Image, { ImageLoader, ImageLoaderProps } from "next/image"
import { TableCol } from "../types"


const teamLoader = ({ src, width, quality }:ImageLoaderProps) => {
    return `teams/${src}?w=${width}&q=${quality || 75}`
}
const extraLoader = ({ src, width, quality }:ImageLoaderProps) => {
    return `extras/${src}?w=${width}&q=${quality || 75}`
}


function TableCol({ idx, team, matches, won, loss, pts, five, four, three, two, one }:TableCol) {
    return (
        <tr className={styles.tr2}>
            <td className={styles.td1}>
                <div className={styles.td2}>
                    <div className={styles.div6}></div>
                    <div className={styles.div7}>
                        <div className={styles.div71}>{idx}</div>
                    </div>
                    <div className={styles.divI}>
                        <Image loader={teamLoader} src={`${team}.png`} className={styles.img} width="24px" height="24px" />
                    </div>
                    <div className={styles.div8}></div>
                    <div className={styles.divb}>{team}</div>
                </div>
            </td>
            <td className={styles.td4}>{matches}</td>
            <td className={styles.td4}>{won}</td>
            <td className={styles.td4}>{loss}</td>
            <td className={styles.td4}>{pts}</td>
            <td className={styles.td5}>
                <div className={styles.div12}>
                    <div className={styles.div13}><Image loader={extraLoader} src={one === 1 ? "win.svg" : "loss.svg"} height={"100%"} width="100%" /></div>
                    <div className={styles.div13}><Image loader={extraLoader} src={two === 1 ? "win.svg" : "loss.svg"} height={"100%"} width="100%" /></div>
                    <div className={styles.div13}><Image loader={extraLoader} src={three === 1 ? "win.svg" : "loss.svg"} height={"100%"} width="100%" /></div>
                    <div className={styles.div13}><Image loader={extraLoader} src={four === 1 ? "win.svg" : "loss.svg"} height={"100%"} width="100%" /></div>
                    <div className={styles.div13}><Image loader={extraLoader} src={five === 1 ? "win.svg" : "loss.svg"} height={"100%"} width="100%" /></div>
                </div>
            </td>
            <td className={styles.td6}></td>
        </tr>
    )
}

export default TableCol
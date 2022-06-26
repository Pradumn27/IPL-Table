import styles from "../styles/Components/Navbar.module.css"
import Link from "next/link";
import Searchbar from "./Searchbar";
import { useRouter } from "next/router";
import { NextPage } from "next";

const Navbar : NextPage = () => {

    const { pathname } = useRouter();

    return (
        <nav className={styles.navbar}>
            <div className={styles.navTop}>
                <div className={styles.top11}></div>
                <div className={styles.top12} ></div>
                <div className={styles.top13}>
                    IPL
                    <Searchbar />
                </div>

            </div>
            <div className={styles.navBottom}>
                <ol className={styles.botOl}>
                    <Link href="/"><li className={`${styles.botLi} ${pathname == "/" && styles.liHover}`}>MATCHES</li></Link>
                    <Link href="/table"><li className={`${styles.botLi} ${pathname != "/" && styles.liHover}`}>TABLE</li></Link>
                </ol>
            </div>
        </nav>
    )
}

export default Navbar
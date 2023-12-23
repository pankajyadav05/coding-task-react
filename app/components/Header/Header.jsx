"use client";

import styles from "../../styles/layout.module.css";
import "../../styles/globals.css";
import { useSelector } from "@/lib/redux";
import Loader from "../Loader/Loader";

const Header = () => {
    const status = useSelector(state => state.counter.status)

    if (status == 'loading') {
        return (
            <header className={styles.header}>
                <Loader />
            </header>
        )
    }

    return (
        <header className={styles.header}>
            <img src="/logo.svg" className={styles.logo} alt="logo" />
        </header>
    )
}

export default Header;
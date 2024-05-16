import Link from "next/link";
import styles from "styles/home.module.css";
import Image from "next/image";
import Login from "components/login";
import Navigation from "components/navigation";
import HomePage from "components/mainPage";

export default function Home() {
    return (
        <div className={styles.div}>
            <HomePage/>
        </div>
    );
}
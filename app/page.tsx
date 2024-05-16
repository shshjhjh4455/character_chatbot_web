import Link from "next/link";
import styles from "styles/home.module.css";
import Image from "next/image";
import Login from "components/login";
import Navigation from "components/navigation";
import TryIt
 from "components/tryIt";
export default function Home() {
    return (
        <div className={styles.div}>
            <h1>가상 인물 챗봇 시스템</h1>
            <TryIt/>
            <Link href="https://github.com/shshjhjh4455/character_chatbot_web" target="_blank">
                <Image src="/github-mark.svg" alt="GitHub Mark" width={48} height={48} />
            </Link>
        </div>
    );
}
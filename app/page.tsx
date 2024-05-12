import Link from "next/link";
import styles from "styles/home.module.css";
import Image from "next/image";
import Login from "components/login";
import Navigation from "components/navigation";
export default function Home() {
    return (
        <div className={styles.div}>
            <h1>Character Chatbot</h1>
            <Link href="https://github.com/shshjhjh4455/character_chatbot_web">
                <Image src="/github-mark.svg" alt="GitHub Mark" width={48} height={48} />
            </Link>
        </div>
    );
}
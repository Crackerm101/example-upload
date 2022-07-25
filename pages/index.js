import Head from "next/head";
import Homepage from "../components/Sections/Header";
import styles from "../styles/Home.module.css";
import About from "../components/Sections/About";
import Support from "../components/Sections/Supports";
import Banner from "../components/Sections/Banner";
import Gallery from "../components/Sections/Gallery";
import Goal from "../components/Sections/Goal";
import Client from "../components/Sections/Clients";
import Article from "../components/Sections/Articles";
export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <meta charset="UTF-8"></meta>
                <meta name="description" content="Free Web tutorials"></meta>
                <meta name="keywords" content="HTML, CSS, JavaScript"></meta>
                <meta name="author" content="John Doe"></meta>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                ></meta>
                <title>Travel on Board</title>
            </Head>
            <Homepage />
            <About />
            <Support />
            <Banner />
            <Gallery />
            <Goal />
            <Client />
            <Article />
        </div>
    );
}

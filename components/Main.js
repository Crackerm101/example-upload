import styles from "../styles/Home.module.css";
import Footer from "./Footer";
import Navbar from "./Navbar";

const Main = ({ children }) => {
    return (
        <div className={styles.container}>
            <>
                <Navbar />
                {children}
                <Footer />
            </>
        </div>
    );
};

export default Main;

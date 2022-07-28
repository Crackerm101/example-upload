import Image from "next/image";
import styles from "../styles/footer.module.css";
import React from "react";

const Footer = () => {
    return (
        <div className={styles.footer_container}>
            <Image src="/Assets/Logo.png" height={50} width={50} />
            <div className={styles.list_menu_footer}>
                <a href="#" className={styles.List_item}>
                    Home
                </a>
                <a href="#" className={styles.List_item}>
                    About Us
                </a>
                <a href="#" className={styles.List_item}>
                    Project Goals
                </a>
                <a href="#" className={styles.List_item}>
                    FLeet Info 2020
                </a>
            </div>
            <div className={styles.footer_credit}>
                © Kidsonboard 2022, All right reserved.Read Our Privacy Policy.
            </div>
        </div>
    );
};

export default Footer;

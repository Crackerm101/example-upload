import styles from "../styles/navbar.module.css";
import Image from "next/image";
import button from "../styles/button.module.css";
import React, { useState, useEffect } from "react";
// Navbar Active

import { MdMenu, MdMenuOpen } from "react-icons/md";

const Navbar = () => {
    const [stickyNav, setStickyNav] = useState(false);
    const [isActive, setIsActive] = useState(false);

    const menuMobileModal = () => {
        setIsActive(!isActive);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    });

    const handleScroll = () => {
        if (window.scrollY > 90) {
            setStickyNav(true);
        } else if (window.scrollY < 90) {
            setStickyNav(false);
        }
    };

    return (
        <div
            className={
                stickyNav ? styles.nav_container_active : styles.nav_container
            }
        >
            <div className={styles.nav_toogle}>
                <div className={styles.logo}>
                    <Image
                        src="/Assets/Logo.png"
                        width="50"
                        height="50"
                        alt="Logo"
                    />
                    Travel Onboard
                </div>

                <div className={styles.ul_container}>
                    <div
                        className={
                            isActive
                                ? styles.mobile_navbar
                                : styles.mobile_navbarActive
                        }
                        onClick={menuMobileModal}
                    >
                        {isActive ? <MdMenuOpen /> : <MdMenu />}
                    </div>
                    <div className={styles.list_menu}>
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
                        <a href="#" className={button.btn_universal}>
                            CONTACT US
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;

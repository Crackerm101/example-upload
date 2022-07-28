import { AiFillInstagram } from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";
import styles from "../../styles/header.module.css";
import button from "../../styles/button.module.css";

const Header = () => {
    return (
        <div className={styles.header_container}>
            <div className={styles.header_items}>
                <div className={styles.header_social}>
                    <span> </span>
                    <AiFillInstagram />
                    <MdOutlineFacebook />
                </div>
                <div className={styles.sub_header}>Travel Onboard</div>
                <div className={styles.header_title}>
                    We cant tell the wind direction, but we set the sails right!
                </div>
                <a href="#" className={button.btn_universal}>
                    EXPLORE MORE
                </a>

                <div className={styles.header_registered}>
                    Registered association MTR number:1234567890
                </div>
            </div>
        </div>
    );
};

export default Header;

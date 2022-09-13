import Image from "next/image";
import styles from "../../styles/about.module.css";
import button from "../../styles/button.module.css";
import Uni from "../../styles/universalTitle.module.css";

export default function About() {
    return (
        <div className={styles.about_container}>
            <div className={styles.universal_header_title_align}>
                <div className={Uni.universal_header_title}>About Us</div>
            </div>

            <div className={styles.about_items}>
                <div className={styles.video_container}>
                    <video autoPlay loop>
                        <source src="/Assets/Header-video.mp4" />
                    </video>
                </div>

                <div className={styles.about_content}>
                    <div className={styles.about_content_title}>We Are...</div>
                    <div className={styles.about_content_desc}>
                        ...skilled social workers and seasoned skippers who give
                        their time to the Travel Board association and annually
                        create a fleet for economically and socially
                        underprivileged kids and teens from central Upper
                        Austria and set up the required funding.
                    </div>
                    <div className={styles.about_content_title}>We want...</div>
                    <div className={styles.about_content_desc}>
                        Children and teenagers who dont always have it easy in
                        life are given the opportunity to spend a memorable week
                        in Croatia. The youngsters and young adults have a
                        newfound zeal for life and perspectives on the future
                        because of this common experience. The kids and teens
                        might remember this experience for a very long time
                        thanks to the subsequent contemplation and care in the
                        individual facilities. This durability generates a large
                        number of pedagogical points of contact that serve as an
                        important foundation for goal achievement.
                    </div>
                    <a href="#" className={button.btn_universal}>
                        READ MORE
                    </a>
                </div>
            </div>
        </div>
    );
}

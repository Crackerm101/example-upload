import Image from "next/image";
import styles from "../../styles/about.module.css";
import { v4 as uuidv4 } from "uuid";

const Banner = () => {
    return (
        <div className={styles.Banner_container}>
            <div className={styles.Banner_data_container}>
                <div className={styles.Banner_desc}>
                    <span>
                        Application of the pedagogical considerations in
                        practice
                    </span>
                    <p>
                        The participants actively participate in sailing.
                        activities. There are obligations for numerous types of
                        lifes daily tasks A menu and cleaning schedule should be
                        helpful. to assume accountability to the organization. a
                        fact that Many people take tremendous pride in being
                        able to sail a ship by themselves. Regular shipboard
                        activities demand the participation of everyone on the
                        staff. Everyone feels as though they are because of this
                        everyone learns to take on roles that are significant to
                        the community this responsibility if they can. Kids On
                        Board provides excellent environment for social learning
                        training. the concentrated clash with the group and
                        others in a small area provides many opportunities to
                        practice interacting with others who are like you. All
                        of these encounters may result in to ones self-worth.
                    </p>
                </div>
                <div className={styles.Banner_Image_con}>
                    <div className={styles.Banner_img}>
                        <Image
                            src="/Assets/Banner-1-min.webp"
                            alt="Image 1"
                            width={500}
                            height={656}
                        />
                    </div>
                    <div className={styles.child_image_banner}>
                        <div className={styles.Banner_img}>
                            <Image
                                src="/Assets/Banner-2-min.webp"
                                alt="Image 1"
                                width={530}
                                height={325}
                            />
                        </div>

                        <div className={styles.Banner_img}>
                            <Image
                                src="/Assets/Banner-3-min.webp"
                                alt="Image 1"
                                width={530}
                                height={325}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;

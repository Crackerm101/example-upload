import Image from "next/image";
import styles from "../../styles/support.module.css";
import Uni from "../../styles/universalTitle.module.css";

const Goal = () => {
    return (
        <div className={styles.goal_container}>
            <div className={styles.goals}>
                <Image
                    src="/Assets/6469709_preview 1.png"
                    alt=""
                    width={82}
                    height={82}
                    loading="lazy"
                    quality={35}
                />
                <div className={styles.Goal_header}>ACHIEVED GOALS</div>

                <p>
                    The Travel Board gives the ideal conditions for the primary
                    goals, such as social integration and educational
                    development of the kids, to be accomplished in a practical,
                    effective, and professional way, and with a lasting impact,
                    by going sailing for a week together.
                </p>
            </div>
        </div>
    );
};

export default Goal;

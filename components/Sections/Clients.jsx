import Image from "next/image";
import Uni from "../../styles/universalTitle.module.css";
import styles from "../../styles/client.module.css";
// Import Swiper styles

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper";

// Ramdom ID
import { v4 as uuidv4 } from "uuid";

const Clients = () => {
    const ClientData = [
        {
            id: uuidv4(),
            desc: "You all did excellent. The part fit perfectly and my cutoff tool is working fine now. Thanks.",
            clientName: "Jonny Matte",
            clientLoc: "(Kalispell MT, MT)",
        },
        {
            id: uuidv4(),
            desc: "You all did excellent. The part fit perfectly and my cutoff tool is working fine now. Thanks.",
            clientName: "Jonny Matte",
            clientLoc: "(Kalispell MT, MT)",
        },
        {
            id: uuidv4(),
            desc: "You all did excellent. The part fit perfectly and my cutoff tool is working fine now. Thanks.",
            clientName: "Jonny Matte",
            clientLoc: "(Kalispell MT, MT)",
        },
        {
            id: uuidv4(),
            desc: "You all did excellent. The part fit perfectly and my cutoff tool is working fine now. Thanks.",
            clientName: "Jonny Matte",
            clientLoc: "(Kalispell MT, MT)",
        },
    ];

    return (
        <div className={styles.client_container}>
            <div className={Uni.universal_header_title}>OUR HAPPY CLIENTS</div>
            <div className={Uni.universal_sub_header_title}>
                What client say about us
            </div>
            <div className={styles.client_main_content}>
                <Swiper
                    style={{
                        "--swiper-pagination-color": "#2A2A2A",
                    }}
                    slidesPerView={2}
                    spaceBetween={10}
                    autoplay={{
                        delay: 3500,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    breakpoints={{
                        1300: {
                            slidesPerView: 2,
                        },
                        700: {
                            slidesPerView: 1,
                        },
                        300: {
                            slidesPerView: 1,
                        },
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className={styles.Swiper_con}
                >
                    {ClientData.map((Client) => (
                        <SwiperSlide
                            className={styles.client_review}
                            key={Client.id}
                        >
                            <div className={styles.data_items}>
                                <span className={styles.quote_left}>
                                    <Image
                                        src="/Assets/icon-park_quote_left.png"
                                        alt=""
                                        width={50}
                                        height={50}
                                        loading="lazy"
                                        quality={35}
                                    />
                                </span>
                                <span className={styles.quote_right}>
                                    <Image
                                        src="/Assets/icon-park_quote_right.png"
                                        alt=""
                                        width={50}
                                        height={50}
                                        loading="lazy"
                                        quality={35}
                                    />
                                </span>

                                <p>{Client.desc}</p>
                                <div className={styles.client_info}>
                                    <h4>{Client.clientName}</h4>
                                    <p>{Client.clientLoc}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Clients;

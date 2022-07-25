import Image from "next/image";
import styles from "../../styles/support.module.css";
import Uni from "../../styles/universalTitle.module.css";
import { v4 as uuidv4 } from "uuid";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper";

const Supports = () => {
    const SupportIMG = [
        {
            id: uuidv4(),
            ImgSupoort: "/Assets/Support-1",
        },
        {
            id: uuidv4(),
            ImgSupoort: "/Assets/Support-2",
        },
        {
            id: uuidv4(),
            ImgSupoort: "/Assets/Support-3",
        },
        {
            id: uuidv4(),
            ImgSupoort: "/Assets/Support-4",
        },
        {
            id: uuidv4(),
            ImgSupoort: "/Assets/Support-5",
        },
        {
            id: uuidv4(),
            ImgSupoort: "/Assets/Support-6",
        },
        {
            id: uuidv4(),
            ImgSupoort: "/Assets/Support-7",
        },
        {
            id: uuidv4(),
            ImgSupoort: "/Assets/Support-1",
        },
        {
            id: uuidv4(),
            ImgSupoort: "/Assets/Support-2",
        },
        {
            id: uuidv4(),
            ImgSupoort: "/Assets/Support-3",
        },
    ];

    return (
        <div className={styles.support_container}>
            <div className={Uni.universal_header_title}>Our Supports</div>
            <div className={Uni.universal_sub_header_title}>
                Thank you for your great commitment and support
            </div>

            <div className={styles.support_image}>
                <Swiper
                    // centeredSlides={true}\
                    slidesPerView={6}
                    speed={1000}
                    autoplay={{
                        delay: 800,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        599: {
                            slidesPerView: 2,
                        },
                        // when window width is <= 999px
                        900: {
                            slidesPerView: 4,
                        },
                        1300: {
                            slidesPerView: 6,
                        },
                    }}
                    loop={true}
                    loopFillGroupWithBlank={true}
                    modules={[Autoplay]}
                    className={styles.Swiper_con}
                >
                    {SupportIMG.map((props) => (
                        //  console.log("data", Support)
                        <SwiperSlide
                            className={styles.image_container}
                            key={props.id}
                        >
                            <Image
                                src={`${props.ImgSupoort}.jpg`}
                                alt=""
                                width="150px"
                                height="75px"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Supports;

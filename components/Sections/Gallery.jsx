import Image from "next/image";
import styles from "../../styles/gallery.module.css";
import Uni from "../../styles/universalTitle.module.css";
import { v4 as uuidv4 } from "uuid";
import button from "../../styles/button.module.css";

const Gallery = () => {
    const GalleryIMG = [
        {
            id: uuidv4(),
            ImgGal: "/Assets/Gallery-1.jpg",
            Gwidth: "491",
            Gheight: "581",
        },
        {
            id: uuidv4(),
            ImgGal: "/Assets/Gallery-2.jpg",
            Gwidth: "491",
            Gheight: "727",
        },
        {
            id: uuidv4(),
            ImgGal: "/Assets/Gallery-3.jpg",
            Gwidth: "491",
            Gheight: "581",
        },
        {
            id: uuidv4(),
            ImgGal: "/Assets/Gallery-4.jpg",
            Gwidth: "491",
            Gheight: "381",
        },

        {
            id: uuidv4(),
            ImgGal: "/Assets/Gallery-5.jpg",
            Gwidth: "491",
            Gheight: "234",
        },
        {
            id: uuidv4(),
            ImgGal: "/Assets/Gallery-6.jpg",
            Gwidth: "491",
            Gheight: "381",
        },
    ];

    return (
        <div className={styles.gallery_container}>
            <div className={styles.gallery_header_title_align}>
                <div className={Uni.universal_header_title}>Our Gallery</div>
                <div className={Uni.universal_sub_header_title}>
                    Thank you for your great commitment and support
                </div>
            </div>

            <div className={styles.gallery_image}>
                {GalleryIMG.map((Gallery) => (
                    <div
                        className={styles.Gallery_image_container}
                        key={Gallery.id}
                    >
                        <Image
                            src={Gallery.ImgGal}
                            alt=""
                            width={Gallery.Gwidth}
                            height={Gallery.Gheight}
                            loading="lazy"
                            quality={35}
                        />
                    </div>
                ))}
            </div>
            <div className={styles.btn_gallery}>
                <a href="#" className={button.btn_universal}>
                    LOAD MORE
                </a>
            </div>
        </div>
    );
};

export default Gallery;

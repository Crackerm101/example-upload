import styles from "../../styles/article.module.css";
import Image from "next/image";
import Uni from "../../styles/universalTitle.module.css";
import button from "../../styles/button.module.css";
import { v4 as uuidv4 } from "uuid";
const Articles = () => {
    const BlogArticle = [
        {
            id: uuidv4(),
            articleIMG: "/Assets/Gallery-2.jpg",
            articleTitle: "Article title 2",
            articleDate: "06/05/2022",
            articleDesc:
                "By experiencing a sailing week together, Travel Board fleet creates ideal conditions under which the key objectives such as social ",
        },
        {
            id: uuidv4(),
            articleIMG: "/Assets/Gallery-3.jpg",
            articleTitle: "Article title 3",
            articleDate: "06/05/2022",
            articleDesc:
                "By experiencing a sailing week together, Travel Board fleet creates ideal conditions under which the key objectives such as social ",
        },
        {
            id: uuidv4(),
            articleIMG: "/Assets/Gallery-4.jpg",
            articleTitle: "Article title 4",
            articleDate: "06/05/2022",
            articleDesc:
                "By experiencing a sailing week together, Travel Board fleet creates ideal conditions under which the key objectives such as social ",
        },
        {
            id: uuidv4(),
            articleIMG: "/Assets/Gallery-5.jpg",
            articleTitle: "Article title 5",
            articleDate: "06/05/2022",
            articleDesc:
                "By experiencing a sailing week together, Travel Board fleet creates ideal conditions under which the key objectives such as social",
        },
        {
            id: uuidv4(),
            articleIMG: "/Assets/Gallery-6.jpg",
            articleTitle: "Article title 6",
            articleDate: "06/05/2022",
            articleDesc:
                "By experiencing a sailing week together, Travel Board fleet creates ideal conditions under which the key objectives such as social",
        },
        {
            id: uuidv4(),
            articleIMG: "/Assets/Gallery-3.jpg",
            articleTitle: "Article title 7",
            articleDate: "06/05/2022",
            articleDesc:
                "By experiencing a sailing week together, the Kids On Board fleet creates ideal conditions under which the key objectives such as social ",
        },
    ];

    return (
        <div className={styles.articles_container}>
            <div className={Uni.universal_header_title}>Our Articles</div>
            <div className={Uni.universal_sub_header_title}>
                Check out our latest article
            </div>

            <div className={styles.articles_items}>
                <div className={styles.main_blog}>
                    <Image
                        src="/Assets/Gallery-Blog-1.jpg"
                        alt=""
                        width={500}
                        height={420}
                        loading="lazy"
                        quality={50}
                    />
                    <h4>Article title 1</h4>
                    <p>06/05/2022</p>
                    <p>
                        Having spent a week sailing together, the Travel Join
                        fleet creates the optimal circumstances for the
                        important goals including social integration and The
                        childrens educational development can be implemented in
                        a clear, effective, and qualified in an effective and
                        long-lasting manner.
                    </p>
                    <a href="#" className={button.btn_universal}>
                        READ MORE
                    </a>
                </div>
                <div className={styles.sub_blog}>
                    {BlogArticle.map((BlogData) => (
                        <div
                            className={styles.sub_blog_content}
                            key={BlogData.id}
                        >
                            <div className={styles.blog_data_img}>
                                <Image
                                    src={BlogData.articleIMG}
                                    alt=""
                                    width={202.17}
                                    height={140}
                                    loading="lazy"
                                    quality={35}
                                />
                            </div>
                            <div className={styles.blog_data_content}>
                                <h4>{BlogData.articleTitle}</h4>
                                <p>{BlogData.articleDate}</p>
                                <p>{BlogData.articleDesc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Articles;

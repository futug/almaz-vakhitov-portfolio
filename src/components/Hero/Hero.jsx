import React, { useRef, useEffect } from "react";
import styles from "./Hero.module.css";

import { CiPlay1 } from "react-icons/ci";

const Hero = ({ timeline }) => {
    const heroVidePreviewsLeft = [
        {
            id: 0,
            srcJpeg: "./image1.jpeg",
            srcWebp: "./image1.webp",
            title: "Crypto God",
        },
        {
            id: 1,
            srcJpeg: "./image3.jpeg",
            srcWebp: "./image3.webp",
            title: "Annoyed Triangle",
        },
        {
            id: 2,
            srcJpeg: "./image5.jpeg",
            srcWebp: "./image5.webp",
            title: "Sneakers Shop",
        },
    ];

    const heroVidePreviewsRight = [
        {
            id: 0,
            srcJpeg: "./image2.jpeg",
            srcWebp: "./image2.webp",
            title: "Most Expensive Jordans",
        },
        {
            id: 1,
            srcJpeg: "./image4.jpeg",
            srcWebp: "./image4.webp",
            title: "New Wave Russian Politics",
        },
        {
            id: 2,
            srcJpeg: "./image6.jpeg",
            srcWebp: "./image6.webp",
            title: "New Balance - 530",
        },
    ];

    let leftsideItems = useRef([]);
    let rightsideItems = useRef([]);

    useEffect(() => {
        timeline.from(leftsideItems.current, 1, {
            opacity: 0,
            x: -100,
        });
        timeline.from(rightsideItems.current, 1, {
            opacity: 0,
            x: 100,
        });
    }, []);

    return (
        <section>
            <div className="container">
                <div className={styles.heroWrapper}>
                    <div className={styles.heroLeft}>
                        {heroVidePreviewsLeft.map((item, index) => (
                            <div ref={(el) => (leftsideItems.current[index] = el)} className={styles.imageWrapper} key={item.id}>
                                <div className={styles.imageFilter}>
                                    <picture>
                                        <source srcSet={item.srcWebp} type="image/webp" />
                                        <img className={styles.image} src={item.srcJpeg} alt="" />
                                    </picture>
                                    <div className={styles.playCta}>
                                        <p className={styles.playText}>Click to watch video!</p>
                                        <CiPlay1 size={40} className={styles.playIcon} />
                                    </div>
                                    <div className={styles.playTitle}>{item.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className={styles.heroRight}>
                        {heroVidePreviewsRight.map((item, index) => (
                            <div ref={(el) => (rightsideItems.current[index] = el)} className={styles.imageWrapper} key={item.id}>
                                <div className={styles.imageFilter}>
                                    <picture>
                                        <source srcSet={item.srcWebp} type="image/webp" />
                                        <img className={styles.image} src={item.srcJpeg} alt="" />
                                    </picture>
                                    <div className={styles.playCta}>
                                        <p className={styles.playText}>Click to watch video!</p>
                                        <CiPlay1 size={40} className={styles.playIcon} />
                                    </div>
                                    <div className={styles.playTitle}>{item.title}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

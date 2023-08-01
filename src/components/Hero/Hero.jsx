import React, { useRef, useEffect, useState } from "react";
import useLockScroll from "../../utils/hooks/useLockScroll";

import styles from "./Hero.module.css";
import { useTranslation } from "react-i18next";

import { CiPlay1 } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";

import { VIDEO_PREVIEWS_LEFT, VIDEO_PREVIEWS_RIGHT } from "../../utils/constants";

const heroVidePreviewsLeft = VIDEO_PREVIEWS_LEFT;
const heroVidePreviewsRight = VIDEO_PREVIEWS_RIGHT;
const Hero = ({ timeline, lang }) => {
    const [previewUrl, setPreviewUrl] = useState("");
    const [videoIsOpen, setVideoIsOpen] = useState(false);
    const handlePreviewClick = (src) => {
        setVideoIsOpen(!videoIsOpen);
        setPreviewUrl(src);
    };

    useLockScroll([videoIsOpen]);

    const { t } = useTranslation();
    let leftsideItems = useRef([]);
    let rightsideItems = useRef([]);

    useEffect(() => {
        timeline.from(leftsideItems.current, 1, {
            opacity: 0,
            x: -100,
            stagger: {
                amount: 0.4,
            },
        });
        timeline.from(rightsideItems.current, 1, {
            opacity: 0,
            x: 100,
            stagger: {
                amount: 0.4,
            },
        });
    }, []);

    const video = useRef(null);
    const videoFrame = useRef();
    const handleVideoOutside = (e) => {
        if (videoIsOpen && !video.current.contains(e.target) && videoFrame.current.contains(e.target)) {
            setVideoIsOpen(false);
        }
    };

    useEffect(() => {
        document.body.addEventListener("click", handleVideoOutside);
        return () => {
            document.body.removeEventListener("click", handleVideoOutside);
        };
    }, [videoIsOpen]);

    return (
        <section>
            <img className={styles.heroBackground} src="./background-asset.svg" alt="" />
            <img className={styles.heroBackgroundRight} src="./background-asset.svg" alt="" />
            <div className="container">
                <div className={styles.heroWrapper}>
                    <div className={styles.heroLeft}>
                        {heroVidePreviewsLeft.map((item, index) => (
                            <div
                                onClick={() => handlePreviewClick(item.src)}
                                ref={(el) => (leftsideItems.current[index] = el)}
                                className={styles.imageWrapper}
                                key={item.id}
                            >
                                <div className={styles.imageFilter}>
                                    <picture>
                                        <source srcSet={item.srcWebp} type="image/webp" />
                                        <img className={styles.image} src={item.srcJpeg} alt="" />
                                    </picture>
                                    <div className={styles.playCta}>
                                        <p className={styles.playText}>{t("heroPlayText")}</p>
                                        <CiPlay1 size={40} className={styles.playIcon} />
                                    </div>
                                    <div className={styles.playTitle}>{lang === "en" ? item.title : lang === "ru" ? item.titleRu : item.titleTr}</div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className={styles.heroRight}>
                        {heroVidePreviewsRight.map((item, index) => (
                            <div
                                onClick={() => handlePreviewClick(item.src)}
                                ref={(el) => (rightsideItems.current[index] = el)}
                                className={styles.imageWrapper}
                                key={item.id}
                            >
                                <div className={styles.imageFilter}>
                                    <picture>
                                        <source srcSet={item.srcWebp} type="image/webp" />
                                        <img className={styles.image} src={item.srcJpeg} alt="" />
                                    </picture>
                                    <div className={styles.playCta}>
                                        <p className={styles.playText}>{t("heroPlayText")}</p>
                                        <CiPlay1 size={40} className={styles.playIcon} />
                                    </div>
                                    <div className={styles.playTitle}>{lang === "en" ? item.title : lang === "ru" ? item.titleRu : item.titleTr}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {videoIsOpen ? (
                <div ref={videoFrame} className={styles.videoLayout}>
                    <iframe
                        ref={video}
                        className={styles.video}
                        allowfullscreen
                        src={previewUrl}
                        title="YouTube video player"
                        frameborder="0"
                        allow="autoplay"
                    ></iframe>

                    {videoIsOpen ? <AiOutlineClose onClick={() => setVideoIsOpen(false)} size={30} className={styles.videoClose} /> : null}
                </div>
            ) : null}
        </section>
    );
};

export default Hero;

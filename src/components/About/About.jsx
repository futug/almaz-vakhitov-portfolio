import React, { useRef, useEffect } from "react";
import styles from "./About.module.css";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { useTranslation } from "react-i18next";

const About = ({ timeline, ease }) => {
    let mainTitle = useRef();
    let mainSubtitle = useRef();
    let socialIconInst = useRef();
    let socialIconTube = useRef();
    let photo = useRef();
    let rightBlock = useRef();

    useEffect(() => {
        timeline.from(mainTitle.current, 1, {
            opacity: 0,
            x: -100,
        });
        timeline.from(mainSubtitle.current, 1, {
            opacity: 0,
            x: 100,
        });
        timeline.from([socialIconInst.current, socialIconTube.current], 1, {
            opacity: 0,
            y: 100,
            stagger: {
                amount: 0.4,
            },
            ease: ease,
        });
        timeline.from([photo.current, rightBlock.current], 1, {
            opacity: 0,
            x: 100,
        });
    }, []);

    const { t } = useTranslation();

    return (
        <section className={styles.about}>
            <div className="container">
                <div className={styles.aboutWrapper}>
                    <div className={styles.titleGroup}>
                        <p ref={mainTitle} className={styles.title}>
                            {t("aboutTitle")}
                        </p>
                        <h1 ref={mainSubtitle} className={styles.subtitle}>
                            {t("aboutSubTitle")}
                        </h1>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.rightSideWrapper}>
                            <div className={styles.socialIcons}>
                                <div ref={socialIconInst}>
                                    <a href="https://www.instagram.com/etozhemazei/" target="_blank">
                                        <div className={`${styles.icoBorder} ${styles.icoBorderInst}`}>
                                            <AiOutlineInstagram className={styles.icon} size={30} />
                                        </div>
                                    </a>
                                </div>
                                <div ref={socialIconTube}>
                                    <a href="https://www.youtube.com/channel/UCRPvpSnoK7LggA4mnjwRVog" target="_blank">
                                        <div className={`${styles.icoBorder} ${styles.icoBorderYouTube}`}>
                                            <AiOutlineYoutube className={`${styles.icon} ${styles.iconYouTube}`} size={30} />
                                        </div>
                                    </a>
                                </div>
                            </div>
                            <div></div>
                            <picture ref={photo} className={styles.photoWrapper}>
                                <source className={styles.photo} srcSet="./authorphoto.webp" type="image/webp" />
                                <source className={styles.photo} srcSet="./authorphoto.jpg" type="image/jpeg" />
                                <img className={styles.photo} src="./authorphoto.jpg" alt="About" />
                            </picture>
                        </div>
                        <div ref={rightBlock} className={styles.leftSideWrapper}>
                            <p className={styles.name}>{t("aboutName")}:</p>
                            <p className={styles.description}>{t("aboutDescOne")}</p>
                            <p className={styles.description}>{t("aboutDescTwo")}</p>
                            <p className={styles.description}>{t("aboutDescThree")}</p>
                            <p className={styles.description}>{t("aboutDescFour")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

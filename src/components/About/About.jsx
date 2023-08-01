import React, { useRef, useEffect } from "react";
import styles from "./About.module.css";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { useTranslation } from "react-i18next";

import { easeInOut, motion, transform } from "framer-motion";

const About = ({ timeline, ease }) => {
    let mainTitle = useRef();
    let mainSubtitle = useRef();
    let socialIconInst = useRef();
    let socialIconTube = useRef();
    let photo = useRef();
    let rightBlock = useRef();

    // useEffect(() => {
    //     timeline.from(mainTitle.current, 1, {
    //         opacity: 0,
    //         x: -100,
    //     });
    //     timeline.from(mainSubtitle.current, 1, {
    //         opacity: 0,
    //         x: 100,
    //     });
    //     timeline.from([socialIconInst.current, socialIconTube.current], 1, {
    //         opacity: 0,
    //         y: 100,
    //         stagger: {
    //             amount: 0.4,
    //         },
    //         ease: ease,
    //     });
    //     timeline.from([photo.current, rightBlock.current], 1, {
    //         opacity: 0,
    //         x: 100,
    //     });
    // }, []);

    const fadeLeft = {
        hidden: {
            opacity: 0,
            x: -100,
        },

        visible: (custom) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: custom * 0.2,
                duration: 1,
                ease: "easeInOut",
            },
        }),
    };

    const fadeRight = {
        hidden: {
            opacity: 0,
            x: 100,
        },
        visible: (custom) => ({
            opacity: 1,
            x: 0,
            transition: {
                delay: custom * 0.2,
                duration: 1,
                ease: "easeInOut",
            },
        }),
    };

    const fadeBottom = {
        hidden: {
            opacity: 0,
            y: 100,
        },
        visible: (custom) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: custom * 0.2,
                duration: 1,
                ease: "easeInOut",
            },
        }),
    };

    const { t } = useTranslation();

    return (
        <motion.section initial="hidden" whileInView="visible" viewport={{ amount: 0.5 }} className={styles.about} id="about">
            <div className="container">
                <div className={styles.aboutWrapper}>
                    <div className={styles.titleGroup}>
                        <motion.p variants={fadeLeft} custom={1} className={styles.title}>
                            {t("aboutTitle")}
                        </motion.p>
                        <motion.h1 variants={fadeRight} custom={2} ref={mainSubtitle} className={styles.subtitle}>
                            {t("aboutSubTitle")}
                        </motion.h1>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.rightSideWrapper}>
                            <div className={styles.socialIcons}>
                                <motion.div variants={fadeBottom} custom={1}>
                                    <a href="https://www.instagram.com/etozhemazei/" target="_blank">
                                        <div className={`${styles.icoBorder} ${styles.icoBorderInst}`}>
                                            <AiOutlineInstagram className={styles.icon} size={30} />
                                        </div>
                                    </a>
                                </motion.div>
                                <motion.div variants={fadeBottom} custom={2}>
                                    <a href="https://www.youtube.com/channel/UCRPvpSnoK7LggA4mnjwRVog" target="_blank">
                                        <div className={`${styles.icoBorder} ${styles.icoBorderYouTube}`}>
                                            <AiOutlineYoutube className={`${styles.icon} ${styles.iconYouTube}`} size={30} />
                                        </div>
                                    </a>
                                </motion.div>
                            </div>
                            <div></div>
                            <motion.picture variants={fadeRight} className={styles.photoWrapper}>
                                <source className={styles.photo} srcSet="./authorphoto.webp" type="image/webp" />
                                <source className={styles.photo} srcSet="./authorphoto.jpg" type="image/jpeg" />
                                <img className={styles.photo} src="./authorphoto.jpg" alt="About" />
                            </motion.picture>
                        </div>
                        <motion.div variants={fadeRight} className={styles.leftSideWrapper}>
                            <p className={styles.name}>{t("aboutName")}:</p>
                            <p className={styles.description}>{t("aboutDescOne")}</p>
                            <p className={styles.description}>{t("aboutDescTwo")}</p>
                            <p className={styles.description}>{t("aboutDescThree")}</p>
                            <p className={styles.description}>{t("aboutDescFour")}</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default About;

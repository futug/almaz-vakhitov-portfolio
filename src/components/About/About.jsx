import React from "react";
import styles from "./About.module.css";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";
import { useTranslation } from "react-i18next";

import { motion } from "framer-motion";

const About = (props) => {
    const birthDate = new Date("1994-10-21");
    const currentDate = new Date();
    const timeDifference = currentDate.getTime() - birthDate.getTime();
    const ageInMilliseconds = new Date(timeDifference);
    const ageInYears = ageInMilliseconds.getUTCFullYear() - 1970;

    const fadeLeft = {
        hidden: (custom) => ({
            opacity: 0,
            x: -100,
            transition: {
                delay: custom * 0.2,
                duration: 1,
                ease: "easeInOut",
            },
        }),

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
        hidden: (custom) => ({
            opacity: 0,
            x: 100,
            transition: {
                delay: custom * 0.2,
                duration: 1,
                ease: "easeInOut",
            },
        }),
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
        hidden: (custom) => ({
            opacity: 0,
            y: 100,
            transition: {
                delay: custom * 0.2,
                duration: 1,
                ease: "easeInOut",
            },
        }),
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
        <motion.section initial="hidden" whileInView="visible" viewport={{ amount: 0.4, once: true }} className={styles.about} id="about">
            <div className="container">
                <div className={styles.aboutWrapper}>
                    <div className={styles.titleGroup}>
                        <motion.p variants={fadeLeft} custom={1} className={styles.title}>
                            {t("aboutTitle")}
                        </motion.p>
                        <motion.h1 variants={fadeRight} custom={2} className={styles.subtitle}>
                            {t("aboutSubTitle")}
                        </motion.h1>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.rightSideWrapper}>
                            <div className={styles.socialIcons}>
                                <motion.div variants={fadeBottom} custom={3}>
                                    <a href="https://www.instagram.com/etozhemazei/" target="_blank">
                                        <div className={`${styles.icoBorder} ${styles.icoBorderInst}`}>
                                            <AiOutlineInstagram className={styles.icon} size={30} />
                                        </div>
                                    </a>
                                </motion.div>
                                <motion.div variants={fadeBottom} custom={4}>
                                    <a href="https://www.youtube.com/channel/UCRPvpSnoK7LggA4mnjwRVog" target="_blank">
                                        <div className={`${styles.icoBorder} ${styles.icoBorderYouTube}`}>
                                            <AiOutlineYoutube className={`${styles.icon} ${styles.iconYouTube}`} size={30} />
                                        </div>
                                    </a>
                                </motion.div>
                            </div>
                            <div></div>
                            <motion.picture variants={fadeRight} custom={5} className={styles.photoWrapper}>
                                <source className={styles.photo} srcSet="./authorphoto.webp" type="image/webp" />
                                <source className={styles.photo} srcSet="./authorphoto.jpg" type="image/jpeg" />
                                <img className={styles.photo} src="./authorphoto.jpg" alt="About" />
                            </motion.picture>
                        </div>
                        <motion.div custom={6} variants={fadeRight} className={styles.leftSideWrapper}>
                            <p className={styles.name}>{t("aboutName")}:</p>
                            <p className={styles.description}>
                                {props.lang === "ru" ? <span>Я {ageInYears}</span> : props.lang === "en" ? <span>I am a {ageInYears}</span> : null}
                                {t("aboutDescOne")}
                            </p>
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

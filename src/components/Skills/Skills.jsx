import React from "react";
import styles from "./Skills.module.css";
import { ReactComponent as Motion } from "../../assets/motion.svg";
import { ReactComponent as Postprod } from "../../assets/postprod.svg";
import { ReactComponent as Voiceover } from "../../assets/voiceover.svg";
import { ReactComponent as Advert } from "../../assets/advertising.svg";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const Skills = () => {
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
                delay: custom * 0.5,
                duration: 1,
                ease: "easeInOut",
            },
        }),
    };

    const { t } = useTranslation();
    return (
        <motion.section initial="hidden" whileInView="visible" viewport={{ amount: 0.2, once: true }} id="skills">
            <div className="container">
                <div className={styles.skillsWrapper}>
                    <div className={styles.titleGroup}>
                        <motion.p variants={fadeLeft} custom={1} className={styles.title}>
                            {t("skillsTitle")}
                        </motion.p>
                        <motion.p variants={fadeRight} custom={2} className={styles.subtitle}>
                            {t("skillsSubtitle")}
                        </motion.p>
                    </div>
                    <motion.div variants={fadeLeft} custom={3} className={styles.skillsDescription}>
                        <p className={styles.descriptionItem}>{t("skillsDescOne")}</p>
                        <p className={styles.descriptionItem}>{t("skillsDescTwo")}</p>
                        <p className={styles.descriptionItem}>{t("skillsDescThree")}</p>
                    </motion.div>

                    <div className={styles.skills}>
                        <motion.div variants={fadeBottom} custom={4} className={styles.skillsItem}>
                            <Motion className={styles.iconE} />
                            <p className={styles.skillTitle}>{t("skillsItemTitleOne")}</p>
                            <p className={styles.skillsItemDesc}>{t("skillsItemDescOne")}</p>
                        </motion.div>
                        <motion.div variants={fadeBottom} custom={5} className={styles.skillsItem}>
                            <Advert className={styles.icon} />
                            <p className={styles.skillTitle}>{t("skillsItemTitleTwo")}</p>
                            <p className={styles.skillsItemDesc}>{t("skillsItemDescTwo")}</p>
                        </motion.div>
                        <motion.div variants={fadeBottom} custom={6} className={styles.skillsItem}>
                            <Postprod className={styles.iconQ} />
                            <p className={styles.skillTitle}>{t("skillsItemTitleThree")}</p>
                            <p className={styles.skillsItemDesc}>{t("skillsItemDescThree")}</p>
                        </motion.div>
                        <motion.div variants={fadeBottom} custom={7} className={styles.skillsItem}>
                            <Voiceover className={styles.icon} />
                            <p className={styles.skillTitle}>{t("skillsItemTitleFour")}</p>
                            <p className={styles.skillsItemDesc}>{t("skillsItemDescFour")}</p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Skills;

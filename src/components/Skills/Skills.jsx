import React, { useEffect, useRef } from "react";
import styles from "./Skills.module.css";
import { ReactComponent as Motion } from "../../assets/motion.svg";
import { ReactComponent as Postprod } from "../../assets/postprod.svg";
import { ReactComponent as Voiceover } from "../../assets/voiceover.svg";
import { ReactComponent as Advert } from "../../assets/advertising.svg";
import { useTranslation } from "react-i18next";

const Skills = ({ timeline, ease }) => {
    const mainTitle = useRef();
    const mainSubtitle = useRef();
    const description = useRef();
    const skillItem1 = useRef();
    const skillItem2 = useRef();
    const skillItem3 = useRef();
    const skillItem4 = useRef();

    useEffect(() => {
        timeline.from(mainTitle.current, 1, {
            opacity: 0,
            x: -100,
        });
        timeline.from(mainSubtitle.current, 1, {
            opacity: 0,
            x: 100,
        });
        timeline.from(description.current, 1, {
            opacity: 0,
            x: -100,

            ease: ease,
        });
        timeline.from([skillItem1.current, skillItem2.current, skillItem3.current, skillItem4.current], 1, {
            opacity: 0,
            y: 100,
            stagger: {
                amount: 1.2,
            },
        });
    }, []);

    const { t } = useTranslation();
    return (
        <section>
            <div className="container">
                <div className={styles.skillsWrapper}>
                    <div className={styles.titleGroup}>
                        <p ref={mainTitle} className={styles.title}>
                            {t("skillsTitle")}
                        </p>
                        <p ref={mainSubtitle} className={styles.subtitle}>
                            {t("skillsSubtitle")}
                        </p>
                    </div>
                    <div ref={description} className={styles.skillsDescription}>
                        <p className={styles.descriptionItem}>{t("skillsDescOne")}</p>
                        <p className={styles.descriptionItem}>{t("skillsDescTwo")}</p>
                        <p className={styles.descriptionItem}>{t("skillsDescThree")}</p>
                    </div>

                    <div className={styles.skills}>
                        <div ref={skillItem1} className={styles.skillsItem}>
                            <Motion className={styles.iconE} />
                            <p className={styles.skillTitle}>{t("skillsItemTitleOne")}</p>
                            <p className={styles.skillsItemDesc}>{t("skillsItemDescOne")}</p>
                        </div>
                        <div ref={skillItem2} className={styles.skillsItem}>
                            <Advert className={styles.icon} />
                            <p className={styles.skillTitle}>{t("skillsItemTitleTwo")}</p>
                            <p className={styles.skillsItemDesc}>{t("skillsItemDescTwo")}</p>
                        </div>
                        <div ref={skillItem3} className={styles.skillsItem}>
                            <Postprod className={styles.iconQ} />
                            <p className={styles.skillTitle}>{t("skillsItemTitleThree")}</p>
                            <p className={styles.skillsItemDesc}>{t("skillsItemDescThree")}</p>
                        </div>
                        <div ref={skillItem4} className={styles.skillsItem}>
                            <Voiceover className={styles.icon} />
                            <p className={styles.skillTitle}>{t("skillsItemTitleFour")}</p>
                            <p className={styles.skillsItemDesc}>{t("skillsItemDescFour")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;

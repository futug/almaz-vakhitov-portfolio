import React, { useEffect, useRef } from "react";
import styles from "./Contact.module.css";
import { AiOutlineInstagram, AiOutlineMail, AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";
import { LiaTelegramPlane } from "react-icons/lia";
import { useTranslation } from "react-i18next";

const Contact = ({ timeline, ease }) => {
    let mainTitle = useRef();
    let mainSubtitle = useRef();
    let form = useRef();

    useEffect(() => {
        timeline.from(mainTitle.current, 1, {
            opacity: 0,
            x: -100,
        });
        timeline.from(mainSubtitle.current, 1, {
            opacity: 0,
            x: 100,
        });
        timeline.from(form.current, 1, {
            opacity: 0,
            y: 100,
            stagger: {
                amount: 0.4,
            },
            ease: ease,
        });
    }, []);
    const { t } = useTranslation();
    return (
        <section>
            <div className="container">
                <div className={styles.contactWrapper}>
                    <div className={styles.titleGroup}>
                        <p ref={mainTitle} className={styles.title}>
                            {t("contactTitle")}
                        </p>
                        <p ref={mainSubtitle} className={styles.subtitle}>
                            {t("contactSubTitle")}
                        </p>
                    </div>
                    <div ref={form} className={styles.contactForm}>
                        <div className={styles.contactInfo}>
                            <p className={styles.contactText}>{t("contactText")}</p>
                            <div className={styles.contactIcons}>
                                <a href="#" target="_blank">
                                    {" "}
                                    <AiOutlineInstagram className={styles.socialIco} size={25} />
                                </a>
                                <a href="#" target="_blank">
                                    <AiOutlineMail className={styles.socialIco} size={25} />
                                </a>
                                <a href="#" target="_blank">
                                    <LiaTelegramPlane className={styles.socialIco} size={25} />
                                </a>
                                <a href="#" target="_blank">
                                    <AiOutlineWhatsApp className={styles.socialIco} size={25} />
                                </a>
                                <a href="#" target="_blank">
                                    {" "}
                                    <AiOutlinePhone className={styles.socialIco} size={25} />
                                </a>
                            </div>
                        </div>
                        <form action="#" method="POST">
                            <div className={styles.inputField}>
                                <input className={styles.input} type="text" placeholder={t("inputName")} name="name" id="name" required />
                            </div>
                            <div className={styles.inputField}>
                                <input className={styles.input} type="email" placeholder={t("inputEmail")} name="email" id="email" required />
                            </div>
                            <div className={styles.inputField}>
                                <textarea
                                    className={`${styles.input} ${styles.message}`}
                                    placeholder={t("inputMessage")}
                                    name="message"
                                    id="message"
                                    required
                                />
                            </div>
                            <button className={styles.button} type="submit" onClick={(e) => e.preventDefault()}>
                                {t("button")}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

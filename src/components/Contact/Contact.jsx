import React, { useEffect, useRef, useState } from "react";
import useLockScroll from "../../utils/hooks/useLockScroll";
import useInput from "../../utils/hooks/FormValidation/useInput";
import useValidation from "../../utils/hooks/FormValidation/useValidation";
import styles from "./Contact.module.css";
import { AiOutlineInstagram, AiOutlineMail, AiOutlineClose } from "react-icons/ai";
import { LiaTelegramPlane } from "react-icons/lia";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";
import { FadeLoader } from "react-spinners";

const Contact = ({ timeline, ease }) => {
    let mainTitle = useRef();
    let mainSubtitle = useRef();
    let formMain = useRef();

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

    const [message, setMessage] = useState("");

    const [popUp, setPopUp] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const form = useRef();
    const irrelevantClick = useRef();

    const email = useInput("", {
        isEmpty: true,
        minLength: 6,
        emailValid: true,
    });
    const name = useInput("", {
        isEmpty: true,
        minLength: 3,
    });

    useLockScroll([popUp, isLoading, isSent]);

    const popUpHandler = () => {
        if (isSent === true) {
            setIsSent(false);
        }

        setPopUp(!popUp);
    };

    const outsideClickHandler = (e) => {
        if (e.target.event === irrelevantClick.current) {
            setPopUp(true);
        } else {
            setPopUp(false);
        }
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm("service_vq4ztwk", "template_q7yv80k", form.current, "qk3s_r4Tf0yePeXWF").then(
            (result) => {
                console.log(result.text);
                setPopUp(true);
                setIsSent(true);
                setIsLoading(false);
                setMessage("");
                email.reset();
                name.reset();
            },
            (error) => {
                setIsLoading(false);
            }
        );
    };

    return (
        <section id="contact">
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
                    <div ref={formMain} className={styles.contactForm}>
                        <div className={styles.contactInfo}>
                            <p className={styles.contactText}>{t("contactText")}</p>
                            <div className={styles.contactIcons}>
                                <a href="https://www.instagram.com/etozhemazei/" target="_blank">
                                    <AiOutlineInstagram className={styles.socialIco} size={25} />
                                </a>
                                <a href="mailto:vakhitov.almaz@gmail.com" target="_blank">
                                    <AiOutlineMail className={styles.socialIco} size={25} />
                                </a>
                                <a href="http://t.me/etozhemazei" target="_blank">
                                    <LiaTelegramPlane className={styles.socialIco} size={25} />
                                </a>
                            </div>
                        </div>
                        <form ref={form} onSubmit={sendEmail}>
                            <div className={styles.inputField}>
                                {name.dirty && name.isEmpty && <div className="error">{name.errorMessages.isEmpty}</div>}
                                {name.dirty && name.minLength && <div className="error">{name.errorMessages.minLength}</div>}
                                <input
                                    value={name.value}
                                    onChange={(e) => name.onChange(e)}
                                    onBlur={(e) => name.onBlur(e)}
                                    className={styles.input}
                                    type="text"
                                    placeholder={t("inputName")}
                                    name="user_name"
                                    id="name"
                                    required
                                />
                            </div>
                            <div className={styles.inputField}>
                                {email.dirty && email.isEmpty && <div className="error">{email.errorMessages.isEmpty}</div>}
                                {email.dirty && email.minLength && <div className="error">{email.errorMessages.minLength}</div>}
                                {email.dirty && email.emailError && <div className="error">{email.errorMessages.email}</div>}
                                <input
                                    value={email.value}
                                    onChange={(e) => email.onChange(e)}
                                    onBlur={(e) => email.onBlur(e)}
                                    className={styles.input}
                                    type="email"
                                    placeholder={t("inputEmail")}
                                    name="user_email"
                                    id="email"
                                    required
                                />
                            </div>
                            <div className={styles.inputField}>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className={`${styles.input} ${styles.message}`}
                                    placeholder={t("inputMessage")}
                                    name="message"
                                    id="message"
                                />
                            </div>
                            <button
                                onClick={(e) => setIsLoading(true)}
                                disabled={!email.inputValid || !name.inputValid}
                                className={styles.button}
                                type="submit"
                            >
                                {t("button")}
                            </button>
                        </form>
                    </div>
                </div>
                <div
                    onClick={(e) => setPopUp(false)}
                    ref={irrelevantClick}
                    className={`${styles.successSendingPopupWrapper} ${popUp ? styles.showWrapper : ""}`}
                >
                    {isSent ? (
                        <div className={`${styles.successSendingPopup} ${popUp ? styles.showPopup : ""}`}>
                            <h2>{t("contactSuccessTitle")}</h2>
                            <p>{t("contactSuccessSubtitle")}</p>
                            <p>{t("contactsSuccesSocial")}</p>
                            <div className={styles.contactIcons}>
                                <a href="https://www.instagram.com/etozhemazei/" target="_blank">
                                    <AiOutlineInstagram className={styles.socialIco} size={25} />
                                </a>
                                <a href="mailto:vakhitov.almaz@gmail.com" target="_blank">
                                    <AiOutlineMail className={styles.socialIco} size={25} />
                                </a>
                                <a href="http://t.me/etozhemazei" target="_blank">
                                    <LiaTelegramPlane className={styles.socialIco} size={25} />
                                </a>
                            </div>
                            <AiOutlineClose onClick={popUpHandler} className={styles.close} />
                        </div>
                    ) : (
                        <div className={`${styles.successSendingPopup} ${popUp ? styles.showPopup : ""}`}>
                            <h2>{t("contactFailTitle")}</h2>
                            <p>{t("contactFailSubtitle")}</p>
                            <div className={styles.contactIcons}>
                                <a href="https://www.instagram.com/etozhemazei/" target="_blank">
                                    <AiOutlineInstagram className={styles.socialIco} size={25} />
                                </a>
                                <a href="mailto:vakhitov.almaz@gmail.com" target="_blank">
                                    <AiOutlineMail className={styles.socialIco} size={25} />
                                </a>
                                <a href="http://t.me/etozhemazei" target="_blank">
                                    <LiaTelegramPlane className={styles.socialIco} size={25} />
                                </a>
                            </div>
                            <AiOutlineClose onClick={popUpHandler} className={styles.close} />
                        </div>
                    )}
                </div>
            </div>
            {isLoading ? (
                <div className={styles.loader}>
                    <FadeLoader color="#ff3297" size={50} />
                </div>
            ) : null}
        </section>
    );
};

export default Contact;

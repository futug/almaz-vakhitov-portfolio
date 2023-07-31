import React, { useEffect, useRef, useState } from "react";
import useLockScroll from "../../utils/hooks/useLockScroll";
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

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [dirtyEmail, setDirtyEmail] = useState(false);
    const [dirtyName, setDirtyName] = useState(false);
    const [emailError, setEmailError] = useState("Email can't be empty :(");
    const [nameError, setNameError] = useState("Can i know your name?");
    const [message, setMessage] = useState("");
    const [formValid, setFormValid] = useState(false);
    const [popUp, setPopUp] = useState(false);
    const [isSent, setIsSent] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const form = useRef();
    const irrelevantClick = useRef();

    useLockScroll(popUp);
    useLockScroll(isLoading);
    const popUpHandler = () => {
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
                setEmail("");
                setName("");
                setMessage("");
                setPopUp(true);
                setIsSent(true);
                setIsLoading(false);
                setDirtyEmail(false);
                setDirtyName(false);
            },
            (error) => {
                console.log(error.text);
                setIsLoading(false);
            }
        );
    };

    const nameHandler = (e) => {
        setName(e.target.value);
        const re = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setNameError("Numbers in the name? Your Majesty?");
        } else {
            setNameError("");
        }
        setDirtyName(false);
    };

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError("Invalid adress, please check it");
        } else if (e.target.value === "") {
            setEmailError("Email can't be empty :(");
        } else {
            setEmailError("");
        }
        setDirtyEmail(false);
    };
    const blurHandler = (e) => {
        switch (e.target.name) {
            case "user_email":
                setDirtyEmail(true);
                break;
            case "user_name":
                setDirtyName(true);
        }
    };

    useEffect(() => {
        if (nameError || emailError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [emailError, nameError]);

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
                                {dirtyName && nameError && <div className="error">{nameError}</div>}
                                <input
                                    value={name}
                                    onChange={nameHandler}
                                    onBlur={blurHandler}
                                    className={styles.input}
                                    type="text"
                                    placeholder={t("inputName")}
                                    name="user_name"
                                    id="name"
                                    required
                                />
                            </div>
                            <div className={styles.inputField}>
                                {dirtyEmail && emailError && <div className="error">{emailError}</div>}
                                <input
                                    value={email}
                                    onChange={emailHandler}
                                    onBlur={blurHandler}
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
                            <button onClick={(e) => setIsLoading(true)} disabled={!formValid} className={styles.button} type="submit">
                                {t("button")}
                            </button>
                        </form>
                    </div>
                </div>
                <div onClick={outsideClickHandler} ref={irrelevantClick} className={`${styles.successSendingPopupWrapper} ${popUp ? styles.showWrapper : ""}`}>
                    {isSent ? (
                        <div className={`${styles.successSendingPopup} ${popUp ? styles.showPopup : ""}`}>
                            <h2>Looks like you send me a message, pretty one!</h2>
                            <p>I promisse to read and replay you as soon as possible!</p>
                            <p>Let's stay in touch:</p>
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
                            <h2>Oooops! Looks like something went wrong!</h2>
                            <p>I don't know what happened, but hope that i started to fix it! Try to catch me again with the direct addressing by:</p>
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

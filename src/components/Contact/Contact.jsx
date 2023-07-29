import React from "react";
import styles from "./Contact.module.css";
import { AiOutlineInstagram, AiOutlineMail, AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";
import { LiaTelegramPlane } from "react-icons/lia";

const Contact = () => {
    return (
        <section>
            <div className="container">
                <div className={styles.contactWrapper}>
                    <div className={styles.titleGroup}>
                        <p className={styles.title}>Let's keep in touch</p>
                        <p className={styles.subtitle}>Do you wanna hire me? Easy-peezy - text, call or fill the form :)</p>
                    </div>
                    <div className={styles.contactForm}>
                        <div className={styles.contactInfo}>
                            <p className={styles.contactText}>
                                Thank you for considering my services. Feel free to reach out to me for any inquiries or collaborations. I look forward to
                                hearing from you and creating something amazing together!
                            </p>
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
                                <input className={styles.input} type="text" placeholder="Name" name="name" id="name" required />
                            </div>
                            <div className={styles.inputField}>
                                <input className={styles.input} type="email" placeholder="Email" name="email" id="email" required />
                            </div>
                            <div className={styles.inputField}>
                                <textarea className={`${styles.input} ${styles.message}`} placeholder="Message" name="message" id="message" required />
                            </div>
                            <button className={styles.button} type="submit" onClick={(e) => e.preventDefault()}>
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

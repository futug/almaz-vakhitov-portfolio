import React, { useRef, useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { AiOutlineClose, AiOutlineDownload, AiOutlineMenu } from "react-icons/ai";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import useLockScroll from "../../utils/hooks/useLockScroll";

import { BiSolidDownArrow } from "react-icons/bi";
import { BsFiletypePdf } from "react-icons/bs";
const Navbar = ({ timeline, ease, lang, setLang }) => {
    const navLinks = [
        {
            id: 0,
            name: "About",
            nameRu: "Обо мне",
            nameTr: "Hakkımda",
            link: "#",
        },
        {
            id: 1,
            name: "Skills",
            nameRu: "Навыки",
            nameTr: "Talimatlar",
            link: "#",
        },
        {
            id: 2,
            name: "Feedback",
            nameRu: "Отзывы",
            nameTr: "Görüşmeler",
            link: "#",
        },
        {
            id: 3,
            name: "Contact",
            nameRu: "Контакты",
            nameTr: "İletişim",
            link: "#",
        },
    ];
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);

    useLockScroll(isOpen);
    const [scrollDown, setScrollDown] = useState(false);
    const handleMenuOpen = () => {
        setIsOpen(!isOpen);
    };

    let logoRef = useRef(null);
    let listItemsRefs = useRef([]);

    useEffect(() => {
        timeline.from(logoRef.current, 1, {
            opacity: 0,
            x: -100,
        });
        timeline.from(listItemsRefs.current, 1, {
            opacity: 0,
            x: 100,
            stagger: {
                amount: 0.4,
            },
            ease: ease,
        });
    }, []);

    useEffect(() => {
        const handlerScrollDown = () => {
            if (window.pageYOffset > 10) {
                setScrollDown(true);
            } else {
                setScrollDown(false);
            }
        };

        handlerScrollDown();
        window.addEventListener("scroll", handlerScrollDown);
        return () => {
            window.removeEventListener("scroll", handlerScrollDown);
        };
    }, []);

    const handleLang = (e) => {
        changeLanguage(e.target.value);
        setLang(e.target.value);
    };

    return (
        <header className={styles.header} style={scrollDown ? { backgroundColor: "#101110" } : {}}>
            <div className="container">
                <div className={styles.navbar} style={scrollDown ? { padding: "10px 0" } : {}}>
                    <p ref={logoRef} className={styles.logo}>
                        almaz vakhitov <span className={styles.videomaker}>videomaker</span>
                    </p>
                    <div className={styles.menu}>
                        <div className={styles.downloadCV}>
                            <p className={styles.downloadLabel}>{t("downloadCV")}</p>
                            <AiOutlineDownload size={25} className={styles.download} />
                            <div className={styles.cvPopup}>
                                <div className={styles.cvPopupInnerRow}>
                                    <a href="./Vakhitov-CV-ru.pdf" download={true} className={styles.cvPopupLink}>
                                        <BsFiletypePdf className={styles.cvPopupIcon} size={25} />
                                        Ru-CV PDF-format
                                    </a>
                                </div>
                                <div className={styles.cvPopupInnerRow}>
                                    <a href="./Vakhitov-CV-eng.pdf" download={true} className={styles.cvPopupLink}>
                                        <BsFiletypePdf className={styles.cvPopupIcon} size={25} />
                                        Eng-CV PDF-format
                                    </a>
                                </div>
                            </div>
                        </div>
                        <nav>
                            <ul className={isOpen ? `${styles.navbarlist} ${styles.navbarlistActive}` : styles.navbarlist}>
                                {navLinks.map((link, index) => (
                                    <li ref={(el) => (listItemsRefs.current[index] = el)} className={styles.listItem} key={link.id}>
                                        <a href={link.link}>{lang === "en" ? link.name : lang === "ru" ? link.nameRu : link.nameTr}</a>
                                    </li>
                                ))}
                                <AiOutlineClose onClick={handleMenuOpen} size={25} className={styles.closeItem} />
                            </ul>
                            <div className={styles.langChoice}>
                                <select className={styles.langInput} value={lang} onChange={handleLang} name="language" id="">
                                    <option value="ru">ru</option>
                                    <option value="en">en</option>
                                    <option value="tr">tr</option>
                                </select>
                                <BiSolidDownArrow size={10} className={styles.downArrow} />
                            </div>
                        </nav>
                    </div>

                    <div className={styles.hamburger}>
                        <AiOutlineMenu onClick={handleMenuOpen} size={25} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

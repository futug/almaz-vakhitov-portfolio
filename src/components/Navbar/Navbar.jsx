import React, { useRef, useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { AiOutlineClose, AiOutlineDownload, AiOutlineMenu } from "react-icons/ai";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";
import useLockScroll from "../../utils/hooks/useLockScroll";
import { NAV_LINKS } from "../../utils/constants";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-scroll";

import { BiSolidDownArrow } from "react-icons/bi";
import { BsFiletypePdf } from "react-icons/bs";

const navLinks = NAV_LINKS;
const Navbar = ({ timeline, ease, lang, setLang, scrollIntoView }) => {
    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [cvIsOpen, setCvIsOpen] = useState(false);

    useLockScroll(isOpen);
    const [scrollDown, setScrollDown] = useState(false);
    const handleMenuOpen = () => {
        setIsOpen(!isOpen);
    };

    const handleCvOutside = (e) => {
        if (cvIsOpen && !cvRef.current.contains(e.target) && !cvUntarget.current.contains(e.target)) {
            setCvIsOpen(false);
        }
    };

    useEffect(() => {
        document.body.addEventListener("click", handleCvOutside);
        return () => {
            document.body.removeEventListener("click", handleCvOutside);
        };
    }, [cvIsOpen]);

    let cvUntarget = useRef();
    let cvRef = useRef();
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
                    <div className={styles.logoGroup}>
                        <Link to="hero" spy={true} smooth={true} offset={-50} duration={1000} onid="hero" className={styles.link}>
                            <p ref={logoRef} className={styles.logo}>
                                almaz vakhitov{" "}
                                <TypeAnimation sequence={["videomaker", 5000, "motiondesigner", 5000, "videoeditor", 5000]} speed={10} repeat={Infinity} />
                            </p>
                        </Link>
                    </div>
                    <div className={styles.menu}>
                        <div ref={cvUntarget} onClick={(e) => setCvIsOpen(!cvIsOpen)} className={styles.downloadCV}>
                            <p className={styles.downloadLabel}>{t("downloadCV")}</p>
                            <AiOutlineDownload size={25} className={styles.download} />
                        </div>
                        <nav>
                            <ul className={isOpen ? `${styles.navbarlist} ${styles.navbarlistActive}` : styles.navbarlist}>
                                {navLinks.map((link, index) => (
                                    <div key={link.id} className={styles.linkItemContainer}>
                                        <li ref={(el) => (listItemsRefs.current[index] = el)} className={styles.listItem}>
                                            <Link to={link.name} spy={true} smooth={true} offset={-50} duration={500} onid={link.name} className={styles.link}>
                                                {lang === "en" ? link.name : lang === "ru" ? link.nameRu : link.nameTr}
                                            </Link>
                                        </li>
                                    </div>
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
                            <div className={styles.hamburger} onClick={handleMenuOpen}>
                                <AiOutlineMenu size={25} />
                            </div>
                        </nav>
                    </div>
                    <div ref={cvRef} onClick={(e) => setCvIsOpen(!cvIsOpen)} className={cvIsOpen ? `${styles.cvPopup} ${styles.cvPopupShow}` : styles.cvPopup}>
                        <div className={styles.cvPopupInnerRow}>
                            <a href="./RusCV.pdf" download={true} className={styles.cvPopupLink}>
                                <BsFiletypePdf className={styles.cvPopupIcon} size={25} />
                                Ru-CV PDF-format
                            </a>
                        </div>
                        <div className={styles.cvPopupInnerRow}>
                            <a href="./EngCV.pdf" download={true} className={styles.cvPopupLink}>
                                <BsFiletypePdf className={styles.cvPopupIcon} size={25} />
                                Eng-CV PDF-format
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;

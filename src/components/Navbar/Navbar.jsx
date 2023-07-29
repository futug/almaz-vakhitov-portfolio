import React, { useRef, useEffect, useState } from "react";
import styles from "./Navbar.module.css";
import { AiOutlineClose, AiOutlineDownload, AiOutlineMenu } from "react-icons/ai";

const Navbar = ({ timeline, ease, ScrollTrigger }) => {
    const navLinks = [
        {
            id: 0,
            name: "About",
            link: "#",
        },
        {
            id: 1,
            name: "Skills",
            link: "#",
        },
        {
            id: 2,
            name: "Feedback",
            link: "#",
        },
        {
            id: 3,
            name: "Contact",
            link: "#",
        },
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [scrollDown, setScrollDown] = useState(false);
    const handleMenuOpen = () => {
        setIsOpen(!isOpen);
    };

    let logoRef = useRef(null);
    let listItemsRefs = useRef([]);

    // const handlerScrollDown = () => {
    //     if (window.pageYOffset > 50) {
    //         setScrollDown(!scrollDown);
    //     } else {
    //         setScrollDown(false);
    //     }
    // };

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

        handlerScrollDown(); // Вызываем функцию один раз при загрузке
        window.addEventListener("scroll", handlerScrollDown); // Добавляем обработчик события прокрутки
        return () => {
            // Удаляем обработчик события при размонтировании компонента
            window.removeEventListener("scroll", handlerScrollDown);
        };
    }, []);

    return (
        <header className={styles.header} style={scrollDown ? { backgroundColor: "#101110" } : {}}>
            <div className="container">
                <div className={styles.navbar} style={scrollDown ? { padding: "10px 0" } : {}}>
                    <p ref={logoRef} className={styles.logo}>
                        almaz vakhitov <span className={styles.videomaker}>videomaker</span>
                    </p>
                    <nav>
                        <ul className={isOpen ? `${styles.navbarlist} ${styles.navbarlistActive}` : styles.navbarlist}>
                            <a href="./VakhitovCV.pdf" target="_blank" className={styles.download}>
                                <AiOutlineDownload size={25} />
                            </a>
                            {navLinks.map((link, index) => (
                                <li ref={(el) => (listItemsRefs.current[index] = el)} className={styles.listItem} key={link.id}>
                                    <a href={link.link}>{link.name}</a>
                                </li>
                            ))}
                            <AiOutlineClose onClick={handleMenuOpen} size={25} className={styles.closeItem} />
                        </ul>
                    </nav>
                    <AiOutlineMenu onClick={handleMenuOpen} size={25} className={styles.hamburger} />
                </div>
            </div>
        </header>
    );
};

export default Navbar;

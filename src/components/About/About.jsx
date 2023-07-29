import React, { useRef, useEffect } from "react";
import styles from "./About.module.css";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";

const About = ({ timeline, ease, scrollTrigger }) => {
    let mainTitle = useRef();
    let mainSubtitle = useRef();
    let socialIconInst = useRef();
    let socialIconTube = useRef();
    let photo = useRef();
    let rightBlock = useRef();

    useEffect(() => {
        timeline.from(mainTitle.current, 1, {
            opacity: 0,
            x: -100,
        });
        timeline.from(mainSubtitle.current, 1, {
            opacity: 0,
            x: 100,
        });
        timeline.from([socialIconInst.current, socialIconTube.current], 1, {
            opacity: 0,
            y: 100,
            stagger: {
                amount: 0.4,
            },
            ease: ease,
        });
        timeline.from([photo.current, rightBlock.current], 1, {
            opacity: 0,
            x: 100,
        });
    }, []);

    return (
        <section>
            <div className="container">
                <div className={styles.aboutWrapper}>
                    <div className={styles.titleGroup}>
                        <p ref={mainTitle} className={styles.title}>
                            Hey there!
                        </p>
                        <h1 ref={mainSubtitle} className={styles.subtitle}>
                            Systems online, engines roaring, and ready to soar to new horizons!
                        </h1>
                    </div>
                    <div className={styles.content}>
                        <div className={styles.rightSideWrapper}>
                            <div className={styles.socialIcons}>
                                <div ref={socialIconInst} className={styles.icoBorder}>
                                    <AiOutlineInstagram className={styles.icon} size={30} />
                                </div>
                                <div ref={socialIconTube} className={styles.icoBorder}>
                                    <AiOutlineYoutube className={styles.icon} size={30} />
                                </div>
                            </div>
                            <div></div>
                            <picture ref={photo} className={styles.photoWrapper}>
                                <source className={styles.photo} srcSet="./authorphoto.webp" type="image/webp" />
                                <source className={styles.photo} srcSet="./authorphoto.jpg" type="image/jpeg" />
                                <img className={styles.photo} src="./authorphoto.jpg" alt="About" />
                            </picture>
                        </div>
                        <div ref={rightBlock} className={styles.leftSideWrapper}>
                            <p className={styles.name}>Almaz Vakhitov</p>
                            <p className={styles.description}>
                                I'm a 28-year-old video enthusiast hailing from the picturesque landscapes of Russia. A true artist at heart, I find my creative
                                haven in the world of video editing and motion design.
                            </p>
                            <p className={styles.description}>
                                My journey in the realm of video editing began with a simple fascination for the power of post-production. As I delved deeper
                                into the art of editing, I discovered the magic of weaving together raw footage into compelling narratives. Each project I
                                undertake becomes a canvas where I blend motion graphics, captivating animations, and seamless transitions to breathe life into
                                stories.
                            </p>
                            <p className={styles.description}>Thank you for visiting my portfolio, where pixels dance and stories come alive.</p>
                            <p className={styles.description}>
                                I invite you to step into my world of motion and discover the magic I have the honor of creating. Welcome to my creative
                                universe!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

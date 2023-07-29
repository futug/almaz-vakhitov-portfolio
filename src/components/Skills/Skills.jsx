import React from "react";
import styles from "./Skills.module.css";
import { ReactComponent as Motion } from "../../assets/motion.svg";
import { ReactComponent as Postprod } from "../../assets/postprod.svg";
import { ReactComponent as Voiceover } from "../../assets/voiceover.svg";
import { ReactComponent as Advert } from "../../assets/advertising.svg";

const Skills = () => {
    return (
        <section>
            <div className="container">
                <div className={styles.skillsWrapper}>
                    <div className={styles.titleGroup}>
                        <p className={styles.title}>skills</p>
                        <p className={styles.subtitle}>What can I do for you?</p>
                    </div>
                    <div className={styles.skillsDescription}>
                        <p className={styles.descriptionItem}>
                            With a keen eye for detail and a passion for storytelling, I seamlessly transform raw footage into compelling narratives. Beyond
                            editing, my voiceover skills add a professional and engaging touch to videos, making them truly stand out.
                        </p>
                        <p className={styles.descriptionItem}>
                            When it comes to crafting commercial videos, I have the expertise to create impactful and persuasive content that effectively
                            conveys your brand's message. Additionally, I'm well-versed in the art of producing engaging YouTube Shorts, perfect for capturing
                            viewers' attention in the fast-paced world of social media.
                        </p>
                        <p className={styles.descriptionItem}>
                            My creative journey began with a fascination for the power of post-production, and it has evolved into a passion for motion design
                            and video storytelling. I invite you to step into my world of motion and discover the magic I have the honor of creating. Welcome to
                            my creative universe!
                        </p>
                    </div>

                    <div className={styles.skills}>
                        <div className={styles.skillsItem}>
                            <Motion className={styles.iconE} />
                            <p className={styles.skillTitle}>Motion Design</p>
                            <p className={styles.skillsItemDesc}>
                                Motion Design: Immerse yourself in the captivating world of motion graphics, where visual elements blend seamlessly to create
                                dynamic and mesmerizing animations that bring your ideas to life.
                            </p>
                        </div>
                        <div className={styles.skillsItem}>
                            <Advert className={styles.icon} />
                            <p className={styles.skillTitle}>Advertisement</p>
                            <p className={styles.skillsItemDesc}>
                                Advertising Videos: Craft compelling and impactful advertisements with a touch of creativity, weaving together powerful visuals
                                and captivating storytelling to leave a lasting impression on your audience.
                            </p>
                        </div>
                        <div className={styles.skillsItem}>
                            <Postprod className={styles.iconQ} />
                            <p className={styles.skillTitle}>Post Production</p>
                            <p className={styles.skillsItemDesc}>
                                Post-Production: Elevate your projects with professional post-production techniques, refining and enhancing raw footage to
                                achieve a polished and professional look.
                            </p>
                        </div>
                        <div className={styles.skillsItem}>
                            <Voiceover className={styles.icon} />
                            <p className={styles.skillTitle}>Voiceover</p>
                            <p className={styles.skillsItemDesc}>
                                Voiceovers: Add a touch of emotion and personality to your videos with professional voiceovers, ensuring that every word is
                                delivered with clarity and impact to captivate your viewers.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
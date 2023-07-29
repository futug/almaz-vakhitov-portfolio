import React from "react";
import styles from "./Feedback.module.css";
import "swiper/css";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { ReactComponent as Quotes } from "../../assets/quotes.svg";
import { MdOutlineSwipe } from "react-icons/md";

const Feedback = () => {
    return (
        <section className={styles.feedback}>
            <div className="container">
                <div className={styles.feedbackWrapper}>
                    <div className={styles.titleGroup}>
                        <p className={styles.title}>The People Say</p>
                        <p className={styles.subtitle}>The word of mouth is the best advertising.</p>
                    </div>
                    <Swiper modules={[Navigation]} spaceBetween={0} loop={true} slidesPerView={1} navigation>
                        <SwiperSlide>
                            <div className={styles.slide}>
                                <div className={styles.quoteBody}>
                                    <Quotes className={styles.quotes} />
                                    <p className={styles.quote}>
                                        I highly recommend its comprehensive services for the ongoing support of our sneaker store. From concept to editing,
                                        animation graphics and voice acting - he provided a holistic and refined appearance of all our marketing materials.
                                    </p>
                                </div>
                                <p className={styles.quoteAuthor}>Artur Murtazin, "Concept" Sneakers Shop</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.slide}>
                                <div className={styles.quoteBody}>
                                    <Quotes className={styles.quotes} />
                                    <p className={styles.quote}>
                                        Absolutely thrilled with the professional and creative video editing services provided. They brought our project to life
                                        and exceeded our expectations!
                                    </p>
                                </div>
                                <p className={styles.quoteAuthor}>Tim</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.slide}>
                                <div className={styles.quoteBody}>
                                    <Quotes className={styles.quotes} />
                                    <p className={styles.quote}>
                                        Reliable and efficient service for editing our video blog. The attention to detail and seamless transitions between
                                        clips truly made a difference!
                                    </p>
                                </div>
                                <p className={styles.quoteAuthor}>Oleg Nevemygh, "Annoyed triangle"</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.slide}>
                                <div className={styles.quoteBody}>
                                    <Quotes className={styles.quotes} />
                                    <p className={styles.quote}>
                                        Outstanding work on our commercial video! They captured the essence of our brand and delivered a compelling story that
                                        resonated with our audience.
                                    </p>
                                </div>
                                <p className={styles.quoteAuthor}>Elena, Head of the Marketing Department</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.slide}>
                                <div className={styles.quoteBody}>
                                    <Quotes className={styles.quotes} />
                                    <p className={styles.quote}>
                                        The team's expertise in motion graphics is unmatched. They added a touch of dynamism and energy to our promotional
                                        video, making it stand out from the crowd.
                                    </p>
                                </div>
                                <p className={styles.quoteAuthor}>Helga, freelance ordering</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <div className={styles.swipeIcons}>
                        <MdOutlineSwipe className={styles.swipe} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feedback;

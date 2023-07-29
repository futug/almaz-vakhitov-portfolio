import React from "react";
import styles from "./Feedback.module.css";
import "swiper/css";
import "swiper/css/navigation";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import { ReactComponent as Quotes } from "../../assets/quotes.svg";
import { MdOutlineSwipe } from "react-icons/md";

const Feedback = () => {
    const { t } = useTranslation();
    return (
        <section className={styles.feedback}>
            <div className="container">
                <div className={styles.feedbackWrapper}>
                    <div className={styles.titleGroup}>
                        <p className={styles.title}>{t("feedTitle")}</p>
                        <p className={styles.subtitle}>{t("feedSubtitle")}</p>
                    </div>
                    <Swiper modules={[Navigation]} spaceBetween={0} loop={true} slidesPerView={1} navigation>
                        <SwiperSlide>
                            <div className={styles.slide}>
                                <div className={styles.quoteBody}>
                                    <Quotes className={styles.quotes} />
                                    <p className={styles.quote}>{t("feedQuoteOne")}</p>
                                </div>
                                <p className={styles.quoteAuthor}>{t("feedQuoteAuthorOne")}</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.slide}>
                                <div className={styles.quoteBody}>
                                    <Quotes className={styles.quotes} />
                                    <p className={styles.quote}>{t("feedQuoteTwo")}</p>
                                </div>
                                <p className={styles.quoteAuthor}>{t("feedQuoteAuthorTwo")}</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.slide}>
                                <div className={styles.quoteBody}>
                                    <Quotes className={styles.quotes} />
                                    <p className={styles.quote}>{t("feedQuoteThree")}</p>
                                </div>
                                <p className={styles.quoteAuthor}>{t("feedQuoteAuthorThree")}</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.slide}>
                                <div className={styles.quoteBody}>
                                    <Quotes className={styles.quotes} />
                                    <p className={styles.quote}>{t("feedQuoteFour")}</p>
                                </div>
                                <p className={styles.quoteAuthor}>{t("feedQuoteAuthorFour")}</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className={styles.slide}>
                                <div className={styles.quoteBody}>
                                    <Quotes className={styles.quotes} />
                                    <p className={styles.quote}>{t("feedQuoteFive")}</p>
                                </div>
                                <p className={styles.quoteAuthor}>{t("feedQuoteAuthorFive")}</p>
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

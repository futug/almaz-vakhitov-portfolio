import React from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import SliderItem from "../SliderItem/SliderItem";
import { FEEDBACK__COMMENTS } from "../../utils/constants";

import { MdOutlineSwipe } from "react-icons/md";

import styles from "./Feedback.module.css";
import "swiper/css";
import "swiper/css/navigation";

const quotes = FEEDBACK__COMMENTS;

const Feedback = ({ lang }) => {
    const { t } = useTranslation();
    return (
        <section className={styles.feedback} id="feedback">
            <div className="container">
                <div className={styles.feedbackWrapper}>
                    <div className={styles.titleGroup}>
                        <p className={styles.title}>{t("feedTitle")}</p>
                        <p className={styles.subtitle}>{t("feedSubtitle")}</p>
                    </div>
                    <Swiper modules={[Navigation]} spaceBetween={0} loop={true} slidesPerView={1} navigation>
                        {quotes.map((item) => (
                            <SwiperSlide key={item.id}>
                                <SliderItem
                                    socialLink={item.quoteLink !== null && item.quoteLink !== undefined ? item.quoteLink : undefined}
                                    qouteText={lang === "en" ? item.quoteEng : lang === "ru" ? item.quoteRu : item.quoteTr}
                                    quoteAuthor={lang === "en" ? item.nameEng : lang === "ru" ? item.nameRu : item.nameTr}
                                />
                            </SwiperSlide>
                        ))}
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

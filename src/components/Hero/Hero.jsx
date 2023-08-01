import React, { useRef, useEffect, useState } from "react";
import { createBreakpoint } from "react-use";
import useLockScroll from "../../utils/hooks/useLockScroll";
import styles from "./Hero.module.css";
import { useTranslation } from "react-i18next";
import { CiPlay1 } from "react-icons/ci";
import { AiOutlineClose } from "react-icons/ai";
import { VIDEO_PREVIEWS_LEFT } from "../../utils/constants";

const heroVidePreviews = VIDEO_PREVIEWS_LEFT;
const BUTTONS = {
    Hide: {
        nameEng: "Hide all",
        nameRu: "Скрыть",
        nameTr: "Tümünü gizle",
    },
    Show: {
        nameEng: "Show all",
        nameRu: "Еще",
        nameTr: "Daha fazlasını göster",
    },
};

const Hero = ({ timeline, lang }) => {
    const [previewUrl, setPreviewUrl] = useState("");
    const [videoIsOpen, setVideoIsOpen] = useState(false);
    const [visible, setVisible] = useState(3);

    const btns = BUTTONS;

    const showMore = () => {
        visible >= heroVidePreviews.length ? setVisible(3) : setVisible((prevValue) => prevValue + 3);
        if (visible === heroVidePreviews.length) {
            window.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const handlePreviewClick = (src) => {
        setVideoIsOpen(!videoIsOpen);
        setPreviewUrl(src);
    };

    useLockScroll([videoIsOpen]);

    const { t } = useTranslation();
    let leftsideItems = useRef([]);

    useEffect(() => {
        timeline.from(leftsideItems.current, 1.4, {
            opacity: 0,
            x: -100,
            stagger: {
                amount: 0.8,
            },
        });
    }, []);

    const video = useRef(null);
    const videoFrame = useRef();

    const handleVideoOutside = (e) => {
        if (videoIsOpen && !video.current.contains(e.target) && videoFrame.current.contains(e.target)) {
            setVideoIsOpen(false);
        }
    };

    useEffect(() => {
        document.body.addEventListener("click", handleVideoOutside);
        return () => {
            document.body.removeEventListener("click", handleVideoOutside);
        };
    }, [videoIsOpen]);

    const useBreakpoint = createBreakpoint();
    const breakpoint = useBreakpoint();

    return (
        <section>
            <img className={styles.heroBackground} src="./background-asset.svg" alt="" />
            <img className={styles.heroBackgroundRight} src="./background-asset.svg" alt="" />
            <div className="container">
                <div className={styles.heroWrapper}>
                    <div className={styles.heroItems}>
                        {breakpoint == "laptop" || breakpoint == "tablet"
                            ? heroVidePreviews.slice(0, visible).map((item, index) => (
                                  <div
                                      onClick={() => handlePreviewClick(item.src)}
                                      ref={(el) => (leftsideItems.current[index] = el)}
                                      className={styles.imageWrapper}
                                      key={item.id}
                                  >
                                      <div className={styles.imageFilter}>
                                          <picture>
                                              <source srcSet={item.srcWebp} type="image/webp" />
                                              <img className={styles.image} src={item.srcJpeg} alt="" />
                                          </picture>
                                          <div className={styles.playCta}>
                                              <p className={styles.playText}>{t("heroPlayText")}</p>
                                              <CiPlay1 size={40} className={styles.playIcon} />
                                          </div>
                                          <div className={styles.playTitle}>{lang === "en" ? item.title : lang === "ru" ? item.titleRu : item.titleTr}</div>
                                      </div>
                                  </div>
                              ))
                            : heroVidePreviews.map((item, index) => (
                                  <div
                                      onClick={() => handlePreviewClick(item.src)}
                                      ref={(el) => (leftsideItems.current[index] = el)}
                                      className={styles.imageWrapper}
                                      key={item.id}
                                  >
                                      <div className={styles.imageFilter}>
                                          <picture>
                                              <source srcSet={item.srcWebp} type="image/webp" />
                                              <img className={styles.image} src={item.srcJpeg} alt="" />
                                          </picture>
                                          <div className={styles.playCta}>
                                              <p className={styles.playText}>{t("heroPlayText")}</p>
                                              <CiPlay1 size={40} className={styles.playIcon} />
                                          </div>
                                          <div className={styles.playTitle}>{lang === "en" ? item.title : lang === "ru" ? item.titleRu : item.titleTr}</div>
                                      </div>
                                  </div>
                              ))}
                    </div>
                    {breakpoint == "laptop" || breakpoint == "tablet" ? (
                        <div className={styles.buttonWrapper}>
                            <button className={styles.button} onClick={showMore}>
                                {visible >= heroVidePreviews.length
                                    ? lang === "en"
                                        ? btns.Hide.nameEng
                                        : lang === "ru"
                                        ? btns.Hide.nameRu
                                        : btns.Hide.nameTr
                                    : lang === "en"
                                    ? btns.Show.nameEng
                                    : lang === "ru"
                                    ? btns.Show.nameRu
                                    : btns.Show.nameTr}
                            </button>
                        </div>
                    ) : null}
                </div>
            </div>

            {videoIsOpen ? (
                <div ref={videoFrame} className={styles.videoLayout}>
                    <iframe
                        ref={video}
                        className={styles.video}
                        allowfullscreen
                        src={previewUrl}
                        title="YouTube video player"
                        frameborder="0"
                        allow="autoplay"
                    ></iframe>

                    {videoIsOpen ? <AiOutlineClose onClick={() => setVideoIsOpen(false)} size={30} className={styles.videoClose} /> : null}
                </div>
            ) : null}
        </section>
    );
};

export default Hero;

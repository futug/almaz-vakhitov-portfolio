import React from "react";
import styles from "./SliderItem.module.css";
import { ReactComponent as Quotes } from "../../assets/quotes.svg";
import { IoIosContact } from "react-icons/io";

const SliderItem = (props) => {
    return (
        <div className={styles.itemWrapper}>
            <div className={styles.item}>
                <div className={styles.itemBody}>
                    <div className={styles.itemImage}>
                        <Quotes className={styles.quotes} />
                    </div>
                    <div className={styles.itemBodyTextWrapper}>
                        <p className={styles.itemBodyText}>{props.qouteText}</p>
                    </div>
                </div>
                <div className={styles.itemFooter}>
                    <p className={styles.itemAuthor}>
                        {" "}
                        {props.socialLink ? (
                            <a className={styles.itemAuthorLink} href={props.socialLink} target="_blank">
                                <IoIosContact size={15} />
                            </a>
                        ) : null}
                        {props.quoteAuthor}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SliderItem;

import React from "react";
import styles from "./SliderItem.module.css";
import { ReactComponent as Quotes } from "../../assets/quotes.svg";

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
                    <p className={styles.itemAuthor}>{props.quoteAuthor}</p>
                </div>
            </div>
        </div>
    );
};

export default SliderItem;

import React from "react";
import styles from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <p className={styles.copyright}>All rights reserved. Copyright &copy; 2023.</p>
            </div>
        </footer>
    );
};

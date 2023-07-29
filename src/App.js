import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

import { gsap, Power3 } from "gsap";

import Feedback from "./components/Feedback/Feedback";
import Contact from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { PacmanLoader } from "react-spinners";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const [lang, setLang] = useState("ru");

    const tl = new gsap.timeline();
    const ease = Power3.easeOut;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const { t, i18n } = useTranslation();

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    console.log(lang);
    return (
        <div className="App">
            {isLoading ? (
                <div className="preloader">
                    <div>
                        <PacmanLoader size={50} color="#ff3297" loading={isLoading} />
                        <p className="text">Preparing to launch...</p>
                    </div>
                </div>
            ) : (
                <>
                    <Navbar timeline={tl} ease={ease} changeLanguage={changeLanguage} lang={lang} setLang={setLang} />
                    <main>
                        <Hero timeline={tl} ease={ease} t={t} lang={lang} />
                        <About timeline={tl} ease={ease} />
                        <Skills timeline={tl} ease={ease} />
                        <Feedback timeline={tl} ease={ease} />
                        <Contact timeline={tl} ease={ease} />
                    </main>
                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;

import React, { useState, useEffect, useRef } from "react";
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

    const tl = new gsap.timeline();
    const ease = Power3.easeOut;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language);

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
    };

    const about = useRef();
    const skills = useRef();
    const feedback = useRef();
    const contact = useRef();

    const scrollIntoView = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    };

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
                    {/* pagetop anchor */}
                    <div id="hero"></div>
                    {/* pagetop anchor */}
                    <Navbar
                        timeline={tl}
                        ease={ease}
                        changeLanguage={changeLanguage}
                        lang={lang}
                        setLang={setLang}
                        about={about}
                        skills={skills}
                        feedback={feedback}
                        contact={contact}
                        scrollIntoView={scrollIntoView}
                    />

                    <main>
                        <Hero timeline={tl} ease={ease} t={t} lang={lang} />
                        <About timeline={tl} ease={ease} about={about} />
                        <Skills timeline={tl} ease={ease} skills={skills} />
                        <Feedback timeline={tl} ease={ease} feedback={feedback} />
                        <Contact timeline={tl} ease={ease} contact={contact} />
                    </main>

                    <Footer />
                </>
            )}
        </div>
    );
}

export default App;

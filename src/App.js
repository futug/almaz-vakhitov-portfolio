import React, { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

import { gsap, Power3 } from "gsap";

import Feedback from "./components/Feedback/Feedback";
import Contact from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

function App() {
    const [isLoading, setIsLoading] = useState(true);
    const tl = new gsap.timeline();
    const ease = Power3.easeOut;

    useEffect(() => {
        // Имитируем задержку прелоудера на 2 секунды
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        // Очистка таймера, чтобы избежать утечки памяти
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="App">
            {isLoading ? (
                <div className="preloader">Preparing for launch...</div>
            ) : (
                <>
                    <Navbar timeline={tl} ease={ease} />
                    <main>
                        <Hero timeline={tl} ease={ease} />
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

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";

import { gsap, Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Feedback from "./components/Feedback/Feedback";
import Contact from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";

gsap.registerPlugin(ScrollTrigger);
function App() {
    let tl = new gsap.timeline();
    let ease = Power3.easeOut;
    return (
        <div className="App">
            <Navbar timeline={tl} ease={ease} />
            <main>
                <Hero timeline={tl} ease={ease} />
                <About timeline={tl} ease={ease} ScrollTrigger={ScrollTrigger} />
                <Skills timeline={tl} ease={ease} />
                <Feedback />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;

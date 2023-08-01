import { useEffect } from "react";

const useCustomScroll = (states) => {
    const handleScroll = () => {
        for (const state of states) {
            if (state === true) {
                document.querySelector("body").style.overflow = "hidden";
            } else {
                document.querySelector("body").style.overflow = "auto";
            }
        }
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [states]);
};

export default useCustomScroll;

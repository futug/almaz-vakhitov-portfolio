import { useEffect } from "react";

const useCustomScroll = (states) => {
    useEffect(() => {
        const handleScroll = () => {
            const shouldLockScroll = states.some((i) => i === true);
            document.querySelector("body").style.overflow = shouldLockScroll ? "hidden" : "auto";
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [states]);
};

export default useCustomScroll;

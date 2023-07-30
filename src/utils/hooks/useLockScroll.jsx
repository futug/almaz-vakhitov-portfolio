import { useEffect } from "react";

const useCustomScroll = (state) => {
    const handleScroll = () => {
        if (state === true) {
            document.querySelector("body").style.overflow = "hidden";
        } else {
            document.querySelector("body").style.overflow = "auto";
        }
    };

    useEffect(() => {
        handleScroll();
        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [state]);
};

export default useCustomScroll;

import { useEffect } from "react";

const useClickOutside = (state, refs, callback) => {
    useEffect(() => {
        const handleClickOutside = (event) => {
            for (const ref of refs) {
                if (state && !ref.current.contains(event.target) && ref.current.contains(event.target)) {
                    callback();
                }
            }
        };

        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [state, refs, callback]);
};

export default useClickOutside;

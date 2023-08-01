import { useState } from "react";
import useValidation from "./useValidation";

const useInput = (initialValue, validations) => {
    const [value, setValue] = useState(initialValue);
    const [dirty, setDirty] = useState(false);
    const valid = useValidation(value, validations);

    const onChange = (e) => {
        setValue(e.target.value);
        setDirty(true);
    };

    const onBlur = (e) => {
        setDirty(true);
    };

    const reset = () => {
        setValue(initialValue);
        setDirty(false);
    };

    return {
        value,
        onChange,
        onBlur,
        dirty,
        ...valid,
        reset,
    };
};

export default useInput;

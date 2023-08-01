import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const useValidation = (value, validations) => {
    const [isEmpty, setIsEmpty] = useState(true);
    const [minLength, setMinLength] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [inputValid, setInputValid] = useState(false);

    const { t } = useTranslation();

    useEffect(() => {
        for (const validation in validations) {
            switch (validation) {
                case "minLength":
                    value.length < validations[validation] ? setMinLength(true) : setMinLength(false);
                    break;
                case "isEmpty":
                    value ? setIsEmpty(false) : setIsEmpty(true);
                    break;
                case "emailValid":
                    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
                    re.test(String(value).toLowerCase()) ? setEmailError(false) : setEmailError(true);
                    break;
                // Добавьте дополнительные кейсы для других видов валидации, если необходимо
                default:
                    break;
            }
        }
    }, [value]);

    useEffect(() => {
        if (isEmpty || minLength || emailError) {
            setInputValid(false);
        } else {
            setInputValid(true);
        }
    }, [isEmpty, minLength, emailError]);
    const errorMessages = {
        isEmpty: "This field is required",
        minLength: "Minimum length should be " + validations.minLength,
        email: "Please enter a valid email",
    };

    return {
        isEmpty,
        minLength,
        emailError,
        errorMessages,
        inputValid,
    };
};

export default useValidation;

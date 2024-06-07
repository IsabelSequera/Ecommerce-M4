import { LoginI, LoginError } from "@/types";

export const validate = (values: LoginI): LoginError => {
    const errors: LoginError = {};

    if (!values.email || values.email.trim() === "") {
        errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is not valid";
    }

    if (!values.password || values.password.trim() === "") {
        errors.password = "Password is required";
    }

    return errors;
}

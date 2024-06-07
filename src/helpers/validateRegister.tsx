import { RegisterI, RegisterError } from "@/types";

export const validateRegister = (values: RegisterI):RegisterError  => {
    const errors: RegisterError = {};
    
    if(!values.email) {
        errors.email = "Email is required"
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        errors.email = "Email is not valid"
    } else if(!values.name) {
        errors.name = "Name is required"
    } else if(!values.password) {
        errors.password = "Password is required"
    } else if(!values.address) {
        errors.address = "Address is required"
    } else if(!values.phone) {
        errors.phone = "Phone is required"
    } 

    return errors;
}
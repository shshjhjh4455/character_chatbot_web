export function checkPW(password : string) {
    if (password.length < 8) {
        return "Password must be at least 8 characters long";
    }
    if (password.length > 25) {
        return "Password must be at most 25 characters long";
    }
    if (!/[a-z]/.test(password)) {
        return "Password must contain at least one lowercase letter";
    }
    if (!/[A-Z]/.test(password)) {
        return "Password must contain at least one uppercase letter";
    }
    if (!/[0-9]/.test(password)) {
        return "Password must contain at least one number";
    }
    if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)) {
        return "Password must contain at least one special character";
    }
    return "ok";
}

export function checkPWMatch(password : string, confirmPassword : string) {
    if (password !== confirmPassword) {
        return "Passwords do not match";
    }
    return "ok";
}

export function checkEmail(email : string) {
    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
        return "Invalid email address";
    }
    return "ok";
}
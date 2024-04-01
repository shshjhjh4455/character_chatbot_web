import jwt, { JwtPayload } from "jsonwebtoken";

interface option {
    expiresIn: string | number;
}

const DEFAULT_SIGN_OPTIONS: option = {
    expiresIn: "1h",
};

export function signJWT(Payload: JwtPayload, options: option = DEFAULT_SIGN_OPTIONS) {
    const secret = process.env.JWT_KEY;
    return jwt.sign(Payload, secret, options);
}

export function verifyJWT(token: string) {
    try {
        const secret = process.env.JWT_KEY;
        return jwt.verify(token, secret) as JwtPayload;
    }
    catch (e) {
        console.error(e);
        return null;
    }
}
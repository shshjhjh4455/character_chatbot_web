import { DefaultSession } from 'next-auth';
import NextAuth from "next-auth/next";

declare module "next-auth" {
    interface User {
        id: string;
        name: string;
        email: string;
        provider: string;
    }
    interface Session extends DefaultSession {
        user?: User;
    }
}
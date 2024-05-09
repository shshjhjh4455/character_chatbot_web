import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import KakaoProvider from "next-auth/providers/kakao"
import CredentialsProvider from "next-auth/providers/credentials"
import { findUserProvider } from "app/utils/db/userdb"
//import jwt, { JwtPayload } from "jsonwebtoken";

const authOptions : NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Email", type: "text" },
                password: { label: "Password", type: "password" },
            },
            async authorize(req) {
                const res = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/login`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        username: req?.username,
                        password: req?.password,
                        provider: "credentials",
                    }),
                });
                const user = await res.json();
                return user;
            }
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
        }),
        KakaoProvider({
            clientId: process.env.KAKAO_CLIENT_ID!,
            clientSecret: process.env.NEXTAUTH_SECRET!,
        }),

    ],
    pages: {
        signIn: "/login",
    },
    session: {
        strategy: "jwt",
        maxAge: 3 * 60 * 60, // 3 hours
        updateAge: 10 * 60, // 10 minutes
    },
    secret: process.env.NEXTAUTH_SECRET!,
    callbacks: {
        async jwt({ token, user, account }) {
            if(account) {
                token.id = user.id;
                if (account.provider !== "credentials") {
                    const find = await findUserProvider(user.email, account.provider);
                    token.id = find.id;
                }
                token.email = user.email;
                token.name = user.name;
                token.provider = account.provider;
            }
            return token;
        },

        async session({ session, token }) {
            session.user = token as any;
            return session;
        },

        async signIn({ user, account }) {
            if (!user?.email) {
                return `/login?error=${user}`;
            }
            const search = await findUserProvider(user.email, account.provider);
            if (!search && account.provider !== "credentials") {
                // Create OAuth user in db if not found
                const fet = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/user/oauth`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name: user.name,
                        email: user.email,
                        provider: account.provider,
                    }),
                });
                return true;
            }
            return true;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions }

/*
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import KakaoProvider from "next-auth/providers/kakao"
import CredentialsProvider from "next-auth/providers/credentials"
import { findUserProvider } from "app/utils/userdb"

const handler = NextAuth({
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
                if (user) {
                    return user;
                }
                else {
                    return null;
                }
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
    },
    callbacks: {
        async jwt({ token, user }) {
            if(!token?.provider && token) {
                if(!token?.picture) {
                    token.provider = "kakao";
                }
                else {
                    token.provider = "google";
                }
            }
            return {...token, ...user };
        },

        async session({ session, token }) {
            session.user = token as any;
            return session;
        },

        async signIn({ user, account }) {
            const search = await findUserProvider(user.email, account.provider);
            if (!search && account.provider !== "credentials") {
                // Create OAuth user if not found
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
                const res = await fet.json();
                return true;
            }
            return true;
        },
    },
})

export { handler as GET, handler as POST }

/*
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import CredentialsProvider from "next-auth/providers/credentials";
import { findUserProvider } from "app/utils/userdb";
import { StreamingTextResponse, experimental_streamText } from 'ai';
import { openai } from 'ai/openai';


const handler = NextAuth({
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
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            username: req?.username,
            password: req?.password,
            provider: "credentials",
          }),
        });
        const user = await res.json();
        if (user) {
          return user;
        } else {
          return null;
        }
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
  },
  callbacks: {
    async jwt({ token, user }) {
      if(!token?.provider && token) {
        if(!token?.picture) {
          token.provider = "kakao";
        } else {
          token.provider = "google";
        }
      }
      return {...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
    async signIn({ user, account }) {
      const search = await findUserProvider(user.email, account.provider);
      if (!search && account.provider !== "credentials") {
        // Create OAuth user if not found
        const fet = await fetch(`${process.env.NEXTAUTH_URL}/api/auth/user/oauth`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name: user.name, email: user.email, provider: account.provider }),
        });
        const res = await fet.json();
        return true;
      }
      return true;
    },
  },
});

//export { handler as GET, handler as POST };

export const runtime = 'edge';

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = await experimental_streamText({
    model: openai.chat('gpt-3.5-turbo-preview'),
    messages,
  });

  return new StreamingTextResponse(result.toAIStream());
}
*/
import NextAuth, { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import KakaoProvider from "next-auth/providers/kakao"
import CredentialsProvider from "next-auth/providers/credentials"
import { findUserProvider } from "app/utils/userdb"
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
                if (user) {
                    return user;
                }
                else {
                    return null;
                }
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
        maxAge: 24 * 60 * 60,
        updateAge: 6 * 60,
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
            const search = await findUserProvider(user.email, account.provider);
            if (!search && account.provider !== "credentials") {
                // Create OAuth user if not found
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
import NextAuth from "next-auth/next";
import { NextApiRequest, NextApiResponse } from "next";
import Spotify from "next-auth/providers/spotify";
import { PrismaClient } from "@prisma/client";
import { NextAuthOptions } from "next-auth";

const prisma = new PrismaClient();

const authOptions: NextAuthOptions = {
    providers: [
        Spotify({
            clientId: process.env.SPOTIFY_CLIENT_ID!,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
            authorization: {
                params: {
                    scope: 'user-read-email, user-top-read',
                },
            },
        }),
    ],

    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                token.accessToken = account.access_token!;
            }
            return token;
        },
        async session({ session, token }) {
            session.user.accessToken = token.accessToken as string;
            return session;
        },
        async signIn({ user, account }) {
            const existingUser = await prisma.user.findUnique({
                where: { email: user.email! },
            });

            if (existingUser) {
                await prisma.user.update({
                    where: { email: user.email! },
                    data: { accessToken: account?.access_token! },
                });
            } else {
                await prisma.user.create({
                    data: {
                        name: user.name!,
                        email: user.email!,
                        accessToken: account?.access_token!,
                    },
                });
            }

            return true;
        },
    },
};

export default (req: NextApiRequest, res: NextApiResponse) => NextAuth(req, res, authOptions);
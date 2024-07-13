import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from '../../../../lib/prisma';
import { NextAuthOptions } from 'next-auth';

export const authOptions: NextAuthOptions = {
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID!,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
            authorization: 'https://accounts.spotify.com/authorize?scope=user-top-read',
        }),
    ],
    adapter: PrismaAdapter(prisma),
    callbacks: {
        async jwt({ token, account }) {
            if (account) {
                // Ensure TypeScript knows about the structure of account
                token.accessToken = account.accessToken as string;
            }
            return token;
        },
        async session({ session, token }) {
            // Ensure TypeScript knows about the structure of token
            session.accessToken = token?.accessToken as string;
            return session;
        },
    },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

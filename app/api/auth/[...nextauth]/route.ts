import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';
import { PrismaClient } from '@prisma/client';


const prisma = new PrismaClient();

export const authOptions = {
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID!,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
            authorization: 'https://accounts.spotify.com/authorize',
        }),
    ],
    callbacks: {
        async session({ session, token }: { session: any, token: any }) {
            const newUser = await prisma.user.upsert({
                where: { spotifyID: token.sub },
                update: { accessToken: token.accessToken },
                create: {
                    email: session.user.email!,
                    spotifyID: token.sub!,
                    accessToken: token.accessToken!,
                }
            })
            session.user.id = token.sub;
            session.user.accessToken = token.accessToken;
            return session;
        },
    },
};


export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }; 
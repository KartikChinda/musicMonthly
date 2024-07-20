// import NextAuth from 'next-auth';
// import SpotifyProvider from 'next-auth/providers/spotify';
// import { PrismaClient } from '@prisma/client';


// const prisma = new PrismaClient();

// export const authOptions = {
//     providers: [
//         SpotifyProvider({
//             clientId: process.env.SPOTIFY_CLIENT_ID!,
//             clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
//             authorization: 'https://accounts.spotify.com/authorize',
//         }),
//     ],
//     callbacks: {
//         async session({ session, token }: { session: any, token: any }) {
//             console.log('Session:', session);
//             console.log('Token:', token);
//             console.log("Email is: ", session.user.email);
//             console.log("ID is: ", token.sub);
//             console.log("Access token is: ", token.accessToken);
//             const newUser = await prisma.user.upsert({
//                 where: { spotifyID: token.sub },
//                 update: { accessToken: token.accessToken },
//                 create: {
//                     email: session.user.email!,
//                     spotifyID: token.sub!,
//                     accessToken: token.accessToken!,
//                 }
//             })
//             session.user.id = token.sub;
//             session.user.accessToken = token.accessToken;
//             return session;
//         },
//     },
// };


// export const handler = NextAuth(authOptions);
// export { handler as GET, handler as POST }; 




import NextAuth from 'next-auth';
import SpotifyProvider from 'next-auth/providers/spotify';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const handler = NextAuth({
    providers: [
        SpotifyProvider({
            clientId: process.env.SPOTIFY_CLIENT_ID!,
            clientSecret: process.env.SPOTIFY_CLIENT_SECRET!,
            authorization: 'https://accounts.spotify.com/authorize',
        }),
    ],
    callbacks: {
        async jwt({ token, account, profile }) {
            console.log('Account:', account);
            console.log('Token before:', token);

            if (account) {
                token.accessToken = account.access_token;
                token.sub = account.providerAccountId;
            }

            console.log('Token after:', token);
            return token;
        },
        async session({ session, token }: any) {
            console.log('Session before:', session);
            console.log('Token:', token);

            session.accessToken = token.accessToken;
            session.user.id = token.sub;

            console.log('Session after:', session);
            console.log("Email is: ", session.user.email);
            console.log("ID is: ", token.sub);
            console.log("Access token is: ", token.accessToken);

            const user = await prisma.user.upsert({
                where: { spotifyID: token.sub },
                update: { accessToken: token.accessToken as string },
                create: {
                    userName: session.user.name!,
                    imageURL: session.user.image!,
                    email: session.user.email!,
                    spotifyID: token.sub!,
                    accessToken: token.accessToken!,
                },
            });

            session.user.id = user.id;
            session.user.accessToken = user.accessToken;
            return session;
        },
    },
});

export { handler as GET, handler as POST }; 

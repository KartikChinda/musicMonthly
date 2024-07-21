import NextAuth from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            accessToken?: string; // Ensure accessToken is optional
            name?: string | null;
            email?: string | null;
            image?: string | null;
        };
    }

    interface User {
        accessToken?: string; // Ensure accessToken is optional
        userName?: string | null;
        email?: string | null;
        imageURL?: string | null;
    }
}

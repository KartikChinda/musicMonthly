import { DefaultSession, DefaultUser } from 'next-auth';
import { JWT } from 'next-auth/jwt';

declare module 'next-auth' {
    interface Session {
        accessToken?: string;
        user: {
            id?: string;
        } & DefaultSession['user'];
    }

    interface User extends DefaultUser {
        accessToken?: string;
    }
}

declare module 'next-auth/jwt' {
    interface JWT {
        accessToken?: string;
    }
}
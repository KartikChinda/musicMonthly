import { getSession } from "next-auth/react";
import { NextResponse } from "next/server";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from 'next';

export async function GET(req: NextApiRequest) {
    const session = await getSession({ req });

    if (!session) {
        return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    try {
        // writing the logic to find the top artists 
        const response = await axios.get('https://api.spotify.com/v1/me/top/artists', {
            headers: {
                Authorization: `Bearer ${session.user.accessToken}`,
            },
        });

        return NextResponse.json(response.data);

    } catch (error) {
        return NextResponse.json({ error: "Failed to fetch the top artists" }, { status: 500 });
    }
}
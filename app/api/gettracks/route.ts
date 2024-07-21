import { PrismaClient } from "@prisma/client";
import getTracks from "@/lib/getTracks";
import getArtists from "@/lib/getArtists";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export const GET = async () => {
    const prisma = new PrismaClient();

    const session = await getServerSession(authOptions);

    const lastUser = session?.user!;

    // const users = await prisma.user.findMany();
    // console.log(users);

    // const lastUser = users[users.length - 1];

    console.log("Latest user is: ", lastUser);

    try {

        const topTracks = await getTracks(lastUser.accessToken!);
        const { items } = await topTracks.json();
        // console.log(items);

        const tracks = items.slice(0, 5).map((track: any) => ({
            imageURL: track.album.images[0].url,
            artist: track.artists.map((_artist: any) => _artist.name).join(', '),
            songUrl: track.external_urls.spotify,
            title: track.name,
        }))

        console.log("The tracks are: ", tracks);

        return new Response(JSON.stringify(tracks), { status: 200 });


    } catch (error) {
        console.log("Error fetching the tracks. The error is: ", error);

        return new Response("Cannot fetch tracks", { status: 500 });
    }



}
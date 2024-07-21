import { PrismaClient } from "@prisma/client";
import getArtists from "@/lib/getArtists";

export const GET = async () => {
    const prisma = new PrismaClient();

    const users = await prisma.user.findMany();
    console.log(users);

    const lastUser = users[users.length - 1];

    console.log("Latest user is: ", lastUser);

    try {

        const topArtists = await getArtists(lastUser.accessToken!);
        const { items } = await topArtists.json();
        // console.log(items);

        const artists = items.slice(0, 5).map((currArtist: any) => ({
            imageURL: currArtist.images[0].url,
            genre: currArtist.genres[0],
            title: currArtist.name,
        }))

        console.log("The artists are: ", artists);

        return new Response(JSON.stringify(artists), { status: 200 });


    } catch (error) {
        console.log("Error fetching the data for the last user. The error is: ", error);

        return new Response("Cannot fetch artists.", { status: 500 });
    }



}


const getArtists = async (access_token: string) => {
    console.log("The function called. Token is ", access_token);

    const TOP_ARTISTS_ENDPOINT = `https://api.spotify.com/v1/me/top/artists?time_range=short_term`

    const result = await fetch(TOP_ARTISTS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    })

    console.log("This is the result: ", result);
    return result;


}

export default getArtists; 
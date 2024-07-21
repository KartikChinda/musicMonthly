

const getTracks = async (access_token: string) => {
    console.log("The function called. Token is ", access_token);

    const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term`

    const result = await fetch(TOP_TRACKS_ENDPOINT, {
        headers: {
            Authorization: `Bearer ${access_token}`,
        }
    })

    console.log("This is the result: ", result);
    return result;


}

export default getTracks; 
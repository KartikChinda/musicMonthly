
export const getGenre = (artists: any[]) => {
    const genreCount: { [genre: string]: number } = {};

    artists.map((artist) => {
        const currGenre = artist.genre;
        if (genreCount[currGenre]) {
            genreCount[currGenre]++;
        } else {
            genreCount[currGenre] = 1;
        }
    })

    console.log(genreCount);

    let mostCommonGenre: string | null = null;
    let maxCount = 0;

    Object.keys(genreCount).forEach(genre => {
        if (genreCount[genre] > maxCount) {
            mostCommonGenre = genre;
            maxCount = genreCount[genre];
        }
    });

    console.log("THe most common genre is: ", mostCommonGenre);

    return mostCommonGenre;
}


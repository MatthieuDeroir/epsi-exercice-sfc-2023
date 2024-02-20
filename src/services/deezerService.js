export const loginWithDeezer = (callback) => {
    DZ.init({
        appId: 668883,
        channelUrl: 'http://localhost:5173/callback',
    });
    DZ.login(function(response) {
        if (response.authResponse) {
            console.log('Welcome! Fetching your information.... ');
            DZ.api('/user/me', function(response) {
                console.log('Good to see you, ' + response.name + '.');
                callback(null, response); // Call the callback with the response
            });
        } else {
            console.log('User cancelled login or did not fully authorize.');
            callback(new Error('User cancelled login or did not fully authorize.')); // Call the callback with an error
        }
    }, {perms: 'basic_access,email'});
};

export const getRandomTrack = async () => {
    return new Promise((resolve, reject) => {
        DZ.api('/chart/0/tracks', (response) => {
            if (response.error) {
                reject(response.error);
            } else {
                const tracks = response.data;
                const randomIndex = Math.floor(Math.random() * tracks.length);
                const randomTrack = tracks[randomIndex];
                resolve(randomTrack);
            }
        });
    });
};

export const getRandomTrackByGenre = async (genreId) => {
    const artistsResponse = await new Promise((resolve, reject) => {
        DZ.api(`/genre/${genreId}/artists`, (response) => {
            if (response.error) {
                reject(response.error);
            } else {
                resolve(response.data);
            }
        });
    });

    const randomArtistIndex = Math.floor(Math.random() * artistsResponse.length);
    const randomArtist = artistsResponse[randomArtistIndex];

    const tracksResponse = await new Promise((resolve, reject) => {
        DZ.api(`/artist/${randomArtist.id}/top`, (response) => {
            if (response.error) {
                reject(response.error);
            } else {
                resolve(response.data);
            }
        });
    });

    const randomTrackIndex = Math.floor(Math.random() * tracksResponse.length);
    const randomTrack = tracksResponse[randomTrackIndex];

    return randomTrack;
};
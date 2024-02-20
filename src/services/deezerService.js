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
            });
        } else {
            console.log('User cancelled login or did not fully authorize.');
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
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
                if (callback) callback(true, response);
            });
        } else {
            console.log('User cancelled login or did not fully authorize.');
            if (callback) callback(false);
        }
    }, {perms: 'basic_access,email'});
};

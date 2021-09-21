const user = {
    hobby: 'Calligraphy',
    favoriteSport: 'Hockey',
    astrologicalSign: 'Aries',
    firstName: 'Buillaume',
    lastName: 'Ialva',
    location: 'Telaviv',
    occupation: 'Engineer'
};

const logWelcomeUser = function logWelcomeUser (welcomeString) {
    console.log(welcomeString + ',' + user.firstName + '. Your occupation is: ' + user.occupation);
}

const bindLogWelcomeUser = logWelcomeUser.bind(user);

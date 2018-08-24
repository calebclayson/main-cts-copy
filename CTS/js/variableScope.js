var userObj = {
    email: 'sample@email.com',
    fullName: 'Yaboi Lemy'
};

function dashboardGreeting() {
    console.log('Hi there, '.concat(userObj.fullName));
}

dashboardGreeting();
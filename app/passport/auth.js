// config/auth.js

// expose our config directly to our application using module.exports
module.exports = {

    'facebookAuth' : {
        'clientID'        : '1181759225168370', // your App ID
        'clientSecret'    : 'f3b0c778a9966a7ad513e23cdc9ae668', // your App Secret
        'callbackURL'     : 'http://hackthearena.herokuapp.com/auth/facebook/callback'
    },

    'twitterAuth' : {
        'consumerKey'        : 'm0JqkRaFAgBtOvxvdmGlkZpOh',
        'consumerSecret'     : 'zEH6ltB1kwWUmR05jglXGleAnjVhCLwbffPnyVvcGCPydcMG47',
        'callbackURL'        : 'http://hackthearena.herokuapp.com/auth/twitter/callback'
    },

    'googleAuth' : {
        'clientID'         : '637123514712-d7vqa5l33qdhmt4s4s32shncj878654p.apps.googleusercontent.com',
        'clientSecret'     : 'y0pabOGpA0RwGjscGaJ6oRtAp',
        'callbackURL'      : 'http://hackthearena.herokuapp.com/auth/google/callback'
    }

};

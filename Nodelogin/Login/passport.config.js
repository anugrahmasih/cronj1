const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt')

 function initialize(passport, getUserByEmail) {

     function authenticateUser = async (email, password, done) => {
        const user = getUserByEmail(email)
        if (user == null) {
            return done(null, false, {message:'No user with that email'})
        }
        try {

            if (await bcrypt.compare(password, user.password)) {

                return done(null, user)

            } else {
                return done(null, false, {message:'Password incorrect'})
            }
        }
        catch (e) {
            return done(e)

        }

    }

     passport.use(new LocalStrategy({ usernamefield: 'email' },
     authenticateUser))
    passport.serializeUser((user, done) => { })
    passport.deserializeUser((id, done) => { })
}

module.exports = initialize

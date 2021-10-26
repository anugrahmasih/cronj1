//this is for .env file to use passport under development
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}





// import modules
const express = require('express')
const app = express()
app.listen(3000) //here we choose our port num
const bcrypt = require('bcrypt')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')
//storing registered data into this not in db
const users = []

//this is how we import our function from passport.config.js file
const initializePassport = require('passport.config.js')
initializePassport(
    passport,
    email =>  users.find(user => user.email === email)
)

//creat an arrow function for routes
//this is main route
app.get('/', (req, res) => {
    res.render('index.ejs', {name:'Masih'})
})

//to get views from ejs we need to work on this 
app.set('view-engine', 'ejs')
//this is so that we can access all urls throgh req obj
app.use(express.urlencoded({ extended: false }))
//for passport
app.use(flash())
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}))

app.use(passport.initialize())
app.use(passport.session())

//new route for login
app.get('/login', (req, res) => {
    res.render('login.ejs')

})

//route for post method for login.ejs
app.post('/login', passport.authenticate('local', {
    sucessRedirect: '/',
    failureRediredct: '/login',
    failureFlash: true

}))





//new route for register
app.get('/register', (req, res) => {
    res.render('register.ejs')

})

//route for post method for regiter.ejs
app.post('/register', async (req, res) => {

    try {
        const hashedPassword = await  bcrypt.hash(req.body.password, 10)
        users.push({
            id: Date.now().toString(),
            name: req.body.name,
            email: req.body.email,
            password:hashedPassword
        })
        res.redirect('/login')
    }
    catch {
        res.redirect('/register')

    }
    console.log(users)


})
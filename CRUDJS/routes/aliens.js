//this is routers file to move b/w diff routers

const express = require('express')
const router = express.Router()
//this is how to import model created in models folder
const Alien = require('../models/alien')    //here alien is js file from models

//request url in get method
// request sholud be always send in asynch request so add word async
//console.log('Get request')    //removed this so we can have response object so add req,res
router.get('/', async (req, res) => {
    try {
        const aliens = await Alien.find()   // it should be a callback function
        //now send your answer in json format
        res.json(aliens)

    }
    catch (err) {
        res.send('Error', +err)
    }
                                     
})


//this is how to get a particular user or ids info through get 
router.get('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id)  //this is how param works  
        //now send your answer in json format
        res.json(alien)

    }
    catch (err) {
        res.send('Error', +err)
    }

})

//now how patch works
router.patch('/:id', async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id)
        //change the status to be patched
        alien.sub = req.body.sub
        const a1 = await alien.save()   //vvi if i change here from save to delete it will work as delete for particular id
        //now send ressponse
        res.json(a1)

    }
    catch (err) {
        res.send('Error')
    }
})


//import modules router so that your server.js can get it
module.exports = router

//to send data create a router
router.post('/', async (req, res)  =>{
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        sub: req.body.sub
    })
    try {
        //now how to save data in db
        const a1 = await alien.save()
        res.json(a1)

    }
    catch (err) {
        res.send('Error')
    }
})
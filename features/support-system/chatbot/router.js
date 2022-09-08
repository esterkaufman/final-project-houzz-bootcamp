const exp = require('express')
const router = exp.Router()
const chatbot = require('./model')

router.get('/getall',  (req, res) => {

    chatbot.getAllProducts().then(data=>res.json(data))
    
})

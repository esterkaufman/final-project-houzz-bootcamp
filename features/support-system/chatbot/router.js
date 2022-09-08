const exp = require('express')
const router = exp.Router()
const chatbot = require('./model')

router.get('/getAllProducts',  (req, res) => {

    chatbot.getAllProducts().then(data=>res.json(data))
    
})
router.post('/addProducts',  (req, res) => {
    let obj=req.body
    chatbot.addProducts(obj).then(data=>res.json(data))
    
})

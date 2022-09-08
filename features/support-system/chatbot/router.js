const exp = require('express')
const router = exp.Router()
const chatbot_model = require('../chatbot')

router.get('/getAllProducts',  (req, res) => {

    chatbot_model.getAllProducts().then(data=>res.json(data))
    
})
router.post('/addProducts',  (req, res) => {
    let obj=req.body
    chatbot_model.addProducts(obj).then(data=>res.json(data))
    
})
export default router;


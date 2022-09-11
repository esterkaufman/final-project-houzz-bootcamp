const exp = require('express')
const router = exp.Router()
const chatbot_model = require('../chatbot')

router.get('/getAllProducts',  (req, res) => {

    chatbot_model.getAllProducts().then(data=>res.json(data))
    
})
router.get('/:id',  (req, res) => {
    let id = req.params.id
    chatbot_model.getProductsById(id).then(data=>res.json(data))

})

router.post('/post', (req, res) => {
        let body = req.body
        chatbot_model.addProducts(body).then(data=> res.json(data))    
    })

router.put("/:id",  (req, res) => {
    let id = req.params.id
    let obj = req.body
    chatbot_model.updateProducts(id, obj).then(data=>res.json(data))
})

router.delete('/:id',  (req, res) => {
    let id = req.params.id
    chatbot_model.deliteProducts(id).then(data=>res.json(data))

})
export default router;


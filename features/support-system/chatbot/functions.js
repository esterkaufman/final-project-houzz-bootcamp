const chatbot_model = require('./chatbot/model')

const getAllProducts = () => {
    return new Promise((resolve) => {
        chatbot_model.find({}, {}, (err, data) => {
            if (err) {
                throw err
            }
            else {
                resolve(data)
            }
            console.log(data);
        })
        
    })
}

const addProducts = (obj) => {
    return new Promise(_=> {
        let add = new chatbot(obj)
        add.save()
       
    })

}
export default {getAllProducts,addProducts}

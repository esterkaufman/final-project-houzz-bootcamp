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
const getProductsById = (id) => {
    console.log(id);
    return new Promise((resolve) => {

        chatbot_model.find({ id }, {_id: 0, __v: 0}, (err, data) => {

            if (err) {
                throw err
            }
            else {
                resolve(data)
            }
            console.log(data);
        });
        // resolve("ProductsById")
    })
}


const updateProducts = (id, obj) => {
console.log(obj,"obj");
    return new Promise((resolve,reject) => {
        chatbot_model.update({id},obj    
        , (err, data) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(data)
               
            }

        })
       
    })
}

const deliteProducts = (id) => {
    console.log(id);
    return new Promise((resolve) => {
        chatbot_model.remove({id}, (err, data) => {
            if (err) {
                return err
            }
            else {
                resolve(data)
            }
        })
    })
}

const addProducts = (obj) => {
    return new Promise(_=> {
        let add = new chatbot(obj)
        add.save()
       
    })

}
export default {getAllProducts,getProductsById,deliteProducts,updateProducts,addProducts}

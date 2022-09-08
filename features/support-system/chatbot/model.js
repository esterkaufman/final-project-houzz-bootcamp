import {createMongooseModel} from "../../../app/API/create-quick/mongo"


const chatbot=createMongooseModel("chatbot",{
    titel:{
        type:String,
        required :[true,"you must choose titel"]
    },
    solution:{
            type:[String],
            required:function(){
                if(this.titel!="information")
                return {solution2:{type:[string]}}
            }
        },
    }
    )


    const getAllProducts = () => {
        return new Promise((resolve) => {
            chatbot.find({}, {}, (err, data) => {
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
    
    
    
    
    
    
    

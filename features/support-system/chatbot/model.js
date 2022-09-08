import {createMongooseModel} from "../../../app/API/create-quick/mongo"


const chatbot=createMongooseModel("chatbot",{
    titel:{
        type:String,
        require :[true,"you must choose titel"]
    },
    solution:{
            type:[String],
            }
        },
    )
    export default chatbot
    
    
    
    
    
    
    

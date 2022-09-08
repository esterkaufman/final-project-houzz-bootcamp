import {createMongooseModel} from "../../../app/API/create-quick/mongo"


const chatbot=createMongooseModel("chatbot",{
    titel:{
        type:String,
        required :[true,"you must choose titel"]
    },
    solution:{
            type:[String],
            required:function(){
                if(this.titel!="infotmetion")
                return {solution2:{type:[string]}}
            }
        },
    }
    )
    export default chatbot
    
    
    
    
    
    
    

import {createMongooseModel} from "../../../app/API/create-quick/mongo"
import mongoose from 'mongoose';

const {Schema}=mongoose;

const chatbot=createMongooseModel("chatbot",{
    title: {
        type: String,
        required: true
    },
    solution: [this.solution2]
           
    }
    )

if (chatbot.titel !="information") { 
    const solution2=new Schema({
        key:{
            type:String,
            required:true
        }
    },{_id:0})
} else  {
    const solution2=new Schema({
        key:{
            type:String,
            required:true
        },
        value:{
            type:[String],
            required:true
    
        }
    },{_id:0})
}
    

    export default chatbot

    
    
    
    
    
    
    

import {createMongooseModel} from "../../../app/API/create-quick/mongo"
import mongoose from 'mongoose';

const {Schema}=mongoose;

const solution2=new Schema({
    key:{
        type:String,
        required:true
    },
    value:{
        type:[String],
        required:function(){return chatbot.titel!="information"}

    }
},{_id:0})



const chatbot=createMongooseModel("chatbot",{
    title: {
        type: String,
        required: true
    },
    solution: [solution2]
           
    }
    )
    export default chatbot

    
    
    
    
    
    
    

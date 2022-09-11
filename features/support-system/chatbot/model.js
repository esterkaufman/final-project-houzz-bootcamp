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
    
    
    
    
    
    
    

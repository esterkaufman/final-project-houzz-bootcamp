const express = require('express')
const { type } = require('os')
const app = express()

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
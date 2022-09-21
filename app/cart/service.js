import "dotenv/config";
import Cart from "./model.js";
import bcrypt from "bcrypt";
import SaleModel from "../product/sale/model.js";
async function getAll() {
    return new Promise(async (resolve, reject) => {
        try {
            const allProduct = await Cart.find({});
            resolve(allProduct);
        }
        catch (error) {
            reject(error);
        }
    })
}

async function getById (id) {
    return new Promise(async (resolve, reject) => {
        try{
            const product = await Cart.findOne({ _id: id });
            resolve(product);
        }
        catch(error){
            reject(error);
        }
    })
}
async function create (obj) {
    return new Promise(async (resolve, reject) => {
        try{
            const product = await Cart.create(obj);
            resolve(product);
        }
        catch(error){
            reject(error);
        }
    })
}

async function update (id, obj) {
    return new Promise(async (resolve, reject) => {
        try{
            const product = await Cart.findByIdAndUpdate(id, obj);
            resolve(product);
        }
        catch(error){
            reject(error);
        }
    })
}

async function deleteProduct (id) {
    return new Promise(async (resolve, reject) => {
        try{
            await Cart.findByIdAndDelete(id);
            resolve("deleted");
        }
        catch(error){
            reject(error);
        }
    })
}


import PDFDocument from 'pdfkit';
import fs from 'fs'
async function sendBill(wants, sum) {
    const doc = new PDFDocument();
    doc.pipe(fs.createWriteStream('jjj.pdf'));
    doc
        .fontSize(27)
        .text('than that you buy in our sale' + sum, 100, 100)
        .text("your order: "+ wants.forEach(async(v,i)=>{
                
            const product = await SaleModel.findOne({ _id: v.product });
            
            if(product){
                "1. "+ product.name +",";
            }
        }))
        .fillColor('blue')

    doc.end();
    return(doc);
}
async function updateCheckout () { 
    return new Promise(async (resolve, reject) => {
        try{
            let wants = await Cart.find({want: true});
            let sum = 0;
            let str = "hello ";
            wants.forEach(async(v,i)=>{
                
                const product = await SaleModel.findOne({ _id: v.product });
                
                if(product){
                    await SaleModel.findByIdAndUpdate(v.product ,{quantity: product.quantity-v.quantity});
                    console.log("in loop "+product.price*v.quantity);
                    sum += product.price*v.quantity;
                    str += product.name + "," + product.price 
                }
            })
            sendBill(wants, sum);
            resolve();
        }
        catch(error){
            reject(error);
        }
    })
}



export default{ getAll, getById, create, update, deleteProduct, updateCheckout };


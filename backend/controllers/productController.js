//function for add product
import {v2 as cloudinary} from 'cloudinary'
import { console } from 'inspector';
import productModel from "../models/productModel.js";
const addProduct = async (req,res)=>{
    try{
        const {name,description,price,category,subCategory,sizes,bestseller} = req.body;
        const image1 = req.files.image1 && req.files.image1[0]
        const image2 = req.files.image2 && req.files.image2[0]
        const image3 = req.files.image3 && req.files.image3[0]
        const image4 = req.files.image4 && req.files.image4[0]
        const images = [image1,image2,image3,image4].filter((item) => item!== undefined)
        let imagesurl = await Promise.all(
            images.map(async (item) => {
                let result = await cloudinary.uploader.upload(item.path,{resource_type:'image'});
                return result.secure_url;
            })
        )
        const productData = {
            name,
            description,
            price: Number(price),
            category,
            subCategory,
            sizes: JSON.parse(sizes),
            bestseller : bestseller === 'true' ? true : false,
            image:imagesurl,
            date: Date.now()
        }
        console.log(productData);
        const product= new productModel(productData);
        await product.save();
        res.json({success:true,message:"Product added successfully"})

    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}
//function for list products
const listProducts = async (req,res)=>{
    try{
        const products = await productModel.find({});
        res.json({success:true,products})
    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}
//function for removing product
const removeProduct = async (req,res)=>{
    try{
        const {id} = req.body;
        await productModel.findByIdAndDelete(id);
        res.json({success:true,message:"Product removed successfully"})
    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}
//function for single product info
const singleProduct = async (req,res)=>{
    try{
        const {id} = req.body;
        const product = await productModel.findById(id);
        res.json({success:true,product})
    }catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}
export {addProduct,listProducts,removeProduct,singleProduct}
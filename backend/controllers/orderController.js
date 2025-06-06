import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

//placing orders using cod method
const placeOrder = async (req,res) => {
    try {
        const {userId,items,amount,address} = req.body;
        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD",
            payment: false,
            date: Date.now()
        }
        const newOrder = new orderModel(orderData);
        await newOrder.save();
        await userModel.findByIdAndUpdate(userId,{cartItems: {}});
        res.json({success: true, message: "Order Placed Successfully"});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}
//placing orders using stripe payment method
const placeOrderStripe = async (req,res) => {
}
//placing order using razorpay payment method
const placeOrderRazorpay = async (req,res) => {
}

// All order data for admin panel
const AllOrders = async (req,res) => {
    try {
        const orders = await orderModel.find();
        res.json({success: true, orders});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}
//user orders
const userOrders = async (req,res) => {
    try {
        const {userId} = req.body;
        const orders = await orderModel.find({userId})
        res.json({success: true, orders});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}
//update order status
const updateStatus = async (req,res) => {
    try {
        const {orderId,status} = req.body;
        await orderModel.findByIdAndUpdate(orderId,{status});
        res.json({success: true, message: "Order Updated Successfully"});
    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message});
    }
}

export {placeOrder,placeOrderStripe,placeOrderRazorpay,AllOrders,userOrders,updateStatus};
import express from 'express'
import {placOrder,placOrderStripe,placOrderRazorpay,allOrders,userOrders,updateStatus, verifyStripe, verifyRazorpay} from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter = express.Router()
//Admin Features
orderRouter.post('/list',adminAuth,allOrders)
orderRouter.post('/status',adminAuth,updateStatus)
//Payment Features
orderRouter.post('/place',authUser,placOrder)
orderRouter.post('/stripe',authUser,placOrderStripe)
orderRouter.post('/razorpay',authUser,placOrderRazorpay)
//user Features
orderRouter.post('/userorders',authUser,userOrders)

//verify payment
orderRouter.post('/verifyStripe',authUser,verifyStripe)
orderRouter.post('/verifyRazorpay',authUser,verifyRazorpay)
export default orderRouter

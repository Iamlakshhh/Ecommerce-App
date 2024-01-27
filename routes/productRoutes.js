import express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { createProductController, 
            deleteProductController, 
            getProductController, 
            getSingleProductController,
            productPhotoController,
            updateProductController
        } from "../controllers/porductController.js";
import formidable from "express-formidable";

const router = express.Router()

//routes
router.post(
'/create-product', 
requireSignIn, 
isAdmin, 
formidable(), 
createProductController);


//get Products
router.get('/get-product',getProductController);


//get single Products
router.get('/get-product/:slug',getSingleProductController);

//get photos
router.get('/product-photo/:pid', productPhotoController);


//delete photos
router.delete('/product/:pid', deleteProductController);

//update product
router.put(
    '/update-product/:pid', 
    requireSignIn, 
    isAdmin, 
    formidable(), 
    updateProductController);

export default router

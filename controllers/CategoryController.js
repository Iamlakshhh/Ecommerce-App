import slugify from "slugify";
import categoryModel from "../models/categoryModel.js";
export const createCategoryController = async (req,res) => {
    try {
        const {name} = req.body;
        if(!name){
            return res.status(401).send({message:'name is required'})
        }
        const existingCategory = await categoryModel.findOne({name});
        if(existingCategory){
            return res.status(200).send({
                success:true,
                message:'Category Already Exist'
            })
        }
        const category =await new categoryModel({name,slug:slugify(name)}).save()
        res.status(201).send({
            success:true,
            message:'New Category Created',
            category
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'error in category'
        })
    }
};


//update category 
export const updateCategoryController = async(req,res)=>{
    try {
        const {name} = req.body
        const {id} = req.params
        const category = await categoryModel.findByIdAndUpdate(id,{name,slug:slugify(name)},{new:true})
        res.status(200).send({
            success:true,
            message:'Category Updated Successfully',
            category
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'error while updating category'
        })
    }
};
 

//get all category

export const categoryController = async(req,res)=>{
    try {
        const category = await categoryModel.find({});
        res.status(200).send({
            success:true,
            message:'All Category List',
            category
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'Erroor while getting all categories'
        });
    }

};


//single category
export const singleCategoryController = async (req,res)=>{
    try {
        const category = await categoryModel.findOne({slug:req.params.slug})
        res.status(200).send({
            success:true,
            message:'get single Category Successfully',  
            category
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success:false,
            error,
            message:'error while getting single category'
        })
    }
}

//delete Category
export const deleteCategoryController = async (req,res) =>{
    try {
        const {id} = req.params
        await categoryModel.findByIdAndDelete(id)
        res.status(200).send({
            success:true,
            message:'category deleted successfully',
            
        })
    } catch (error) {
        console.log(error),
        res.status(500).send({
            success:false,
            message:'error while deleting category',
            error,
        })
    }
};
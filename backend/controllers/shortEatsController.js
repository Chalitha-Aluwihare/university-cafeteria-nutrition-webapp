import shortEatsModel from "../models/shortEatsModel.js";
import fs from 'fs';

// add short eats items
const addShortEats = async (req, res) => {
    // Check if file was uploaded
    if (!req.file) {
        return res.status(400).json({ success: false, message: "No image file uploaded" });
    }

    const imge_fileName = req.file.filename;

    const shortEast = new shortEatsModel({
        img: imge_fileName,
        name: req.body.name,
        available: req.body.available,
        rating: req.body.rating,
        size: req.body.size,
        totalCalories: req.body.totalCalories,
        totalCarbs: req.body.totalCarbs,
        totalProtein: req.body.totalProtein,
        totalFat: req.body.totalFat,
        price: req.body.price
    });

    try {
        await shortEast.save();
        res.json({ success: true, message: "Short eat item added" });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Failed to add short eat item" });
    }
};

//all shortEats List
const listShortEats = async (req,res) => {
    try{
        const shortEast = await shortEatsModel.find({});
        res.json({success :true, data: shortEast})
    }catch (error) {
        console.log(error);
        res.json({success:false,message: 'Error'})
    }
}

//remove shortEats 
const removeShortEats = async (req,res) =>{
    try{
        const shortEast = await shortEatsModel.findById(req.body.id);
        fs.unlink(`uploads/shortEats/${shortEast.img}`, () => {})

        await shortEatsModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:'shortEast removed'})
    }catch(error){
        console.log(error);
        res.json({success:false,message:'Error'});

    }
}

export { addShortEats, listShortEats, removeShortEats };

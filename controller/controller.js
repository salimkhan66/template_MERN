const userModel=require('../Models/user')
const docterModel=require("../Models/docter")

function home(req,res){
    res.send("this is the user home page");
}

async function inserData(req,res){
    try {
        // Create a new instance of the user model
        const userData = new userModel(req.body);

        // Save the instance to the database
        await userData.save();

        res.json({
            status: "inserted successfully",
            userData: userData
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
}
async function appointment(req,res){

    try {

        // const {name,specialization,user_Id}=req.body
        
        // Create a new instance of the user model
       
        const appointmentData = new docterModel(req.body);
       

        // Save the instance to the database
        await appointmentData.save();

        res.json({
            status: "inserted successfully",
            userData: appointmentData
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error.message
        });
    }
}
module.exports={home,inserData,appointment}

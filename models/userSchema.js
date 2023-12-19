import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true 
    },
    password:{
        type:String,
        required:true
    },
    mobile:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },
    currentAddress:{
        type:String,
        required:true
    },
    years:{
        type:String,
        required:true
    },
    dob:{
        type:String,
        required:true
    },
    info:{
        type:String,
        required:true
    },
    emp_status:{
        type:String,
        required:true
    },
    investment:{
        type:String,
        required:true
    }
})


const userModel = mongoose.models.userModel || mongoose.model("userModel", userSchema);

export default userModel;
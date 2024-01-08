import mongoose from "mongoose";

const loginSchema = new mongoose.Schema({
    username:{
       type:String,
       require:true
    },
    password:{
        type:String,
        require:true
     },
   
},
{timestamps:true}
);

const Loginmodel = mongoose.model('login',loginSchema);

export default Loginmodel
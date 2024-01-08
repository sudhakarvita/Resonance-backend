import mongoose from "mongoose";

const allSchema = new mongoose.Schema({
    fullname:{
       type:String,  
    },
    Imgpath:{
        type:[],  
     },
     title:{
        type:String,  
     },
     shortDescription:{
        type:String
     },
     longDescription:{
        type:String
     },
     status:{
        type:String,
        enum:["active","deactive"]
     }
   
},
{timestamps:true}
);

const Settingsmodel = mongoose.model('setting',allSchema);

export default Settingsmodel
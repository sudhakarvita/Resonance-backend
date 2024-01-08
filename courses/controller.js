import Settingsmodel from "../common/settings-model.js"

export const addCoursenames = async(req,res)=>{
    try{
        const Courses = await Settingsmodel.create(req.body)
       return res.status(200).json(Courses)
    }catch(err){
       return res.status(500).json({err:'error'})
    }
}
import Loginmodel from "../common/login-model.js";
import jwt  from "jsonwebtoken";
import bcrypt from "bcrypt";


export const createNewadmin = async (req, res,) => {
    try {
      const { username, password } = req.body;
      const hashedPassword = await bcrypt.hash(password, 6);

      const newAdmin = new Loginmodel({ username, password: hashedPassword });
      await newAdmin.save();
      res.status(201).json(newAdmin);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to create user' });
    }
  };

  export const adminLogin = async (req,res) =>{
    try{
      const { username } = req.body;
      const Admin = await Loginmodel.findOne({ username });
      
        if (!Admin || !(await bcrypt.compare(req.body.password, Admin.password))) {
          return res.status(401).json({ error: 'Invalid username or password' });
        }
        const secretKey = 'my-secretKey';
        const token = jwt.sign({ "username":req.body.username, "password":req.body.password},secretKey,{ expiresIn: '1h' })
       return res.status(200).json({Admin,token})
    }catch(err){
      return res.status(500).json({err:'Admin login failed'})
      
    }
};
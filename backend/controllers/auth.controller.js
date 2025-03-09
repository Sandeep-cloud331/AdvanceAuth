import { User } from "../model/user.model.js";import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import bcrypt from "bcryptjs"


export const signin = async(req,res)=>{
  const {email,name,password} = req.body;
  try {
    if(!email || !password || !name){
      throw new Error("All fields are required");
    }

    const userExist = await User.findOne({email});
    if(userExist){
      return res.status(400).json({message:"user already exist"});

    }
    const hashedPassword = await bcrypt.hash(password,10);
    console.log("done");
    
    const verificationToken = Math.floor(10000+Math.random()* 900000).toString();
    const user = new User({
      email,
			password: hashedPassword,
			name,
			verificationToken,
			verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000,
    })
    

    await user.save();
    console.log(user.save());
    
    console.log("done");
    generateTokenAndSetCookie(res,user._id 
    )
    console.log("done");
    
    res.status(201).json({message:"User created successfully",
      success: true,
      user:{
        ...user._doc,
        password:undefined,
      },
    })
    
  } catch (error) {
    res.status(400).json({message:error.message})
  }

}

export const login = async(req,res)=>{
  res.send("login route")

}

export const logout = async(req,res)=>{
  res.send("logout route")

}


import User from "../model/User.js";

export const loginUser = async (req, res) => {
  res.json({ mssg: "login user" });
};

export const signupUser = async (req, res) => {
  const { email, password } = req.body;

  try{
const user = await User.signUp(email, password)

res.status(200).json({email, user})

  }
  catch(error){
res.status(400).json({error: error.message})

  }
};

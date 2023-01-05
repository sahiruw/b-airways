const admin = require('../models/adminModel');




const adminLogin = async (req,res) => {
    const{username,password} = req.body;
    const data = await admin.adminLogin(password);

    if(!data[0]){return res.json({status : 0,message : "There is no admin with that user name"})};

    if(!(await bycrypt.compare(password,data[0].password))){return res.jsom({status: 0,message : "Incorrect Password"})};

    return (res.json({status : 1,message: "Admin has logged in successfully"}))

}
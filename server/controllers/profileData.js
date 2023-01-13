const user = require('../models/userModel');


const ProfileData = async(req,res) => {
    const{email} = req.query;
    
    let data = await user.getProfileData(email);
    

    return res.json({status:1,userDataTable:data});

}

module.exports = ProfileData;
const admin = require('../models/adminModel');


const Revenue = async(req,res) =>{
    
    const data = await admin.Revenue();
    let total = 0;
    
    for(let i = 0;i<data.length;i++){
        total += data[i].revenue;
    }
    
    return res.json({status:1,revenue:data,total:total});
}

module.exports = Revenue;
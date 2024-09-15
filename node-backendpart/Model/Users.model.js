const mongoose = require ("mongoose");


const usersSchema = mongoose.Schema({
    fullName:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
    },
    password:{
        type:String,
        require:true,
    },
    
});

const usersModel = mongoose.model("users" , usersSchema);
module.exports = usersModel;
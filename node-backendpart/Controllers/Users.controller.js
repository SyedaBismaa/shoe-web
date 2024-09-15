const usersModel = require("../Model/Users.model");
const becrypt = require("bcrypt");

exports.register =(req ,res )=>{

    const { fullName , email, password } = req.body;

    const newUser = new usersModel ({
        fullName ,
         email ,
        password : becrypt.hashSync(password , 10),
    });

    usersModel.findOne({email}).then(data => {
        if (data){
            return res.status(400).json({message: "User is already ragisterd"});
        }else {
            newUser.save()
            .then(data=>{
            return res.status(200).json({message:"User ragisterd successfully"});
            });
        };
    }).catch(err=>{
        return res.status(500).send({message: "Server not avelaible"})
    });
};





const ShoeModel = require("../Model/Shoes.model");

exports.create = (req , res )=>{
    const{name , type , rating , price , imageUrl} = req.body ;

    const newShoe = new ShoeModel({
        name ,
        type ,
        rating ,
        price ,
        imageUrl
    });

    newShoe.save().then(data=> {
        if(!data){
            res.status(400).send("something went wrong");
        }
        res.send(data);
    })
    .catch(err => res.status(500).json({message:"server is not avelaible"}));

};
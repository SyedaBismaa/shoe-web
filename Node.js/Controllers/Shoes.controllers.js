

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


exports.fetch = (req , res)=>{
    ShoeModel
    .find()
    .then((data)=>{
        if(!data){
            res.status(404).json({message: "Data Not Found "});
        }
        res.send(data);
    })
    .catch((err)=>res.status(500).json({message: "Server is not avelaible"}));
};

exports.fetchOne = (req , res)=>{
    const _id = req.params.id;
     
ShoeModel
.find({ _id: _id})
.then((data)=>{
    if(!data){
        res.status(404).json({message:"Data not found"});
    }
    res.send(data);
})
.catch((err)=>res.status(500).json({message : "Server is not avelaible"}))
};



exports.updateOne = (req , res)=>{
    const _id = req.params.id;
     
ShoeModel
.findByIdAndUpdate(_id , {rating :"4.0"})
.then((data)=>{
    if(!data){
        res.status(404).json({message:"Data not found"});
    }
    res.send(data);
})
.catch((err)=>res.status(500).json({message : "Server is not avelaible"}))
};


exports.delete = (req , res)=>{
    const _id = req.params.id;
     
ShoeModel
.findByIdAndDelete(_id)
.then((data)=>{
    if(!data){
        res.status(404).json({message:"Shoe not found"});
    }
    res.send(data);
})
.catch((err)=>res.status(500).json({message : "Server is not avelaible"}))
};


const ShoeController = require("../Controllers/Shoes.controllers");



module.exports = (app) =>{
    app.post("/api/shoes" , ShoeController.create);
};
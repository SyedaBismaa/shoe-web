

const ShoeController = require("../Controllers/Shoes.controllers");



module.exports = (app) =>{
    app.post("/api/shoes" , ShoeController.create);
    app.get("/api/shoes" , ShoeController.fetch );
    app.get("/api/shoes/:id" , ShoeController.fetchOne);
    app.put("/api/shoes/:id" , ShoeController.updateOne);
    app.put("/api/shoes/:id" , ShoeController.delete);
};
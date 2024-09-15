const usersController = require("../Controllers/Users.controller");

module.exports = (app)=>{
    app.post("/api/ragister", usersController.register);
}
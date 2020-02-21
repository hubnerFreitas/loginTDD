const routes = require("express").Router();

const SessionController = require("./app/controller/SessionController");

routes.post("/sessions", SessionController.store);

module.exports = routes;

const { Router } = require("express");

module.exports = indexRouter = Router();

const indexpage = require("../Controllers/index.controller");

indexRouter.route("/").get(indexpage);

module.exports = indexRouter;

const { Router } = require("express");

module.exports = router = Router();

const indexRoute = require("../Routes/index.router");

router.use("/", indexRoute);

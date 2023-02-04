const express = require("express");
const router = express.Router();

const dht22Controller = require("../controller/dht22/dht22.controller");

router.get("/get_dht22", dht22Controller.getDht22);
router.get("/create_dht22", dht22Controller.createDht22);

module.exports = router;

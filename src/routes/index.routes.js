const express = require("express");
const router = express.Router();

const dht22Controller = require("../controller/dht22/dht22.controller");
const btnController = require("../controller/sw/sw.controller");

router.get("/get_dht22", dht22Controller.getDht22);
router.get("/create_dht22", dht22Controller.createDht22);

router.get("/create_btn", btnController.createBtn);
router.get("/getBtnAll", btnController.getBtnAll);
router.get("/getBtnlast", btnController.getBtnlast);

module.exports = router;

const { Dht22 } = require("../../model/index.model");
const { notifyEvent } = require("../../config/notify");
const moment = require("moment");
const createDht22 = async (req, res) => {
  try {
    const { temperature, humidity } = req.query;

    const createDht22 = await Dht22.create({
      temperature: temperature,
      humidity: humidity,
    });

    notifyEvent(
      `อุณหภูมิ:${createDht22.temperature} ความชื้น:${
        createDht22.humidity
      } วันที่/เวลา:${moment(createDht22.createdAt).format(
        "DD/MM/YYYY - HH:mm:ss"
      )}`
    );
    return res.send(createDht22);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const getDht22 = async (req, res) => {
  const { order } = req.query;
  try {
    const getDht = await Dht22.findAll({
      order: [["dht_id", order === "DESC" ? "DESC" : "ASC"]],
    });
    return res.send(getDht);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = {
  createDht22: createDht22,
  getDht22: getDht22,
};

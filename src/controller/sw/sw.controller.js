const { Button } = require("../../model/index.model");

const createBtn = async (req, res) => {
  try {
    const { status } = req.query;

    const createBtn = await Button.create({
      status: status,
    });

    return res.send(createBtn);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

const getBtnAll = async (req, res) => {
  const { order } = req.query;
  try {
    const getDht = await Button.findAll({
      order: [["btm_id", order === "DESC" ? "DESC" : "ASC"]],
    });
    return res.send(getDht);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};
const getBtnlast = async (req, res) => {
  let btnlast = "";
  try {
    const getDht = await Button.findAll({
      order: [["btm_id", "ASC"]],
    });
    btnlast = getDht.pop().status;
    return res.send(btnlast);
  } catch (err) {
    return res.status(500).send(err.message);
  }
};

module.exports = {
  createBtn: createBtn,
  getBtnAll: getBtnAll,
  getBtnlast: getBtnlast,
};

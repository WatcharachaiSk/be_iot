module.exports = (sequelize, Sequelize) => {
  const button = sequelize.define(
    "button",
    {
      btm_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      status: {
        type: Sequelize.STRING,
      },
    },
    {
      createdAt: true,
      upadteAt: true,
      timestamp: true,
    }
  );
  return button;
};

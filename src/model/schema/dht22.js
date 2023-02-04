module.exports = (sequelize, Sequelize) => {
  const dht22 = sequelize.define(
    "dht22",
    {
      dht_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      temperature: {
        type: Sequelize.STRING,
      },
      humidity: {
        type: Sequelize.STRING,
      },
    },
    {
      createdAt: true,
      upadteAt: true,
      timestamp: true,
    }
  );
  return dht22;
};

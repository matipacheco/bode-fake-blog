import Sequelize from "sequelize";

const sequelizeConnector = new Sequelize({
  dialect: 'sqlite',
  storage: './src/config/database.sqlite'
});

export default sequelizeConnector;
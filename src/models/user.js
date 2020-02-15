import Sequelize from "sequelize";
import sequelizeConnector from "../config/database";

class User extends Sequelize.Model {}

User.init({
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  sequelize: sequelizeConnector,
  modelName: 'user',
  timestamps: true
});

export default User;
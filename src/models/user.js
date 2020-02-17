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
  },
  salt: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  sequelize: sequelizeConnector,
  modelName: 'user',
  timestamps: true
});

// User.beforeCreate(newUser => {
//   newUser.salt      = createSalt();
//   newUser.password  = encryptPassword(newUser.password, newUser.salt);
// });

export default User;

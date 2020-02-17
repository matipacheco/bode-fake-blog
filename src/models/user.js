import Sequelize from "sequelize";
import Crypto from "crypto-js"

import sequelizeConnector from "../config/database";
import {createSalt} from "../utils"

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
  }
}, {
  sequelize: sequelizeConnector,
  modelName: 'user',
  timestamps: true
});

User.encryptPassword = function(password, salt) {
  return Crypto.AES.encrypt(password, salt);
};

User.afterCreate(newUser => {
  newUser.salt = createSalt();
  newUser.password  = Crypto.AES.encrypt(newUser.password, newUser.salt);
});

export default User;
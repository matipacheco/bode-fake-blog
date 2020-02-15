import Sequelize from "sequelize";
import sequelizeConnector from "../config/database";

class FakePost extends Sequelize.Model {}

FakePost.init({
    author: {
      type: Sequelize.STRING,
      allowNull: false
    },
    title: {
      type: Sequelize.TEXT,
      allowNull: false
    },
    description: {
      type: Sequelize.TEXT
    },
    content: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  }, {
  sequelize: sequelizeConnector,
  modelName: 'fakePost',
  timestamps: true
});

export default FakePost;
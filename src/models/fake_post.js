import Sequelize from "sequelize";
import sequelizeConnector from "../config/database";

import {slugify} from "../utils"

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
    },
    postUrl: {
      type: Sequelize.STRING,
      set(value) {
        this.setDataValue('postUrl', slugify(value));
      }
    }
  }, {
  sequelize: sequelizeConnector,
  modelName: 'fakePost',
  timestamps: true
});

FakePost.beforeCreate(newPost => {
  newPost.set('postUrl', newPost.title);
});

export default FakePost;
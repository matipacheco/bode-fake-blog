import Sequelize from "sequelize";

// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: 'path/to/database.sqlite'
// });

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
});
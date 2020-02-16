import Sequelize from "sequelize";
import sequelizeConnector from "../config/database";

class FakePost extends Sequelize.Model {}

function slugifyTitle(title) {
  let map = {
    '-' : ' ',
    'a' : 'á|à|ã|â|À|Á|Ã|Â',
    'e' : 'é|è|ê|É|È|Ê',
    'i' : 'í|ì|î|Í|Ì|Î',
    'o' : 'ó|ò|ô|õ|Ó|Ò|Ô|Õ',
    'u' : 'ú|ù|û|ü|Ú|Ù|Û|Ü',
    'c' : 'ç|Ç',
    'n' : 'ñ|Ñ',
  };

  let slugifiedTitle = title.toLowerCase();

  for (var pattern in map) {
    slugifiedTitle = slugifiedTitle.replace(new RegExp(map[pattern], 'g'), pattern);
  };

  return slugifiedTitle.replace(/[^a-zA-Z-]/g, '');
}

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
        this.setDataValue('postUrl', slugifyTitle(value));
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
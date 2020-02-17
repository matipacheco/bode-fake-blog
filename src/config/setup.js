import sequelizeConnector from "./database";
import FakePost from "../models/fake_post";
import User from "../models/user";
import { createNewUser } from "../utils";

sequelizeConnector.authenticate()
  .then(() => {
    console.log('---------------------------------------------');
    console.log('Connection has been established successfully.');
    console.log('---------------------------------------------\n');

    console.log('---------------------------------------------');
    console.log('Creating blog database. BEEP BOOP.');
    console.log('---------------------------------------------\n');

    FakePost.sync({ force: true }).then(() => {
      console.log('---------------------------------------------');
      console.log('Posts table created. BADABUM-BADABUM.');
      console.log('---------------------------------------------\n');
    });

    User.sync({ force: true }).then(() => {
      console.log('---------------------------------------------');
      console.log('Users table created. BANG! KABOOM!.');
      console.log('---------------------------------------------\n');

      createNewUser('someusername', 'somepassword')
        .then(user => {
          console.log("Our doorman has been created!");
          console.log(user.toJSON());
        });
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    return 0;
  });

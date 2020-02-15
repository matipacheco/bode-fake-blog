import sequelizeConnector from "./database";
import FakePost from "../models/fake_post";

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
      console.log('Database created. BADABUM.');
      console.log('---------------------------------------------\n');
    });
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    return 0;
  });

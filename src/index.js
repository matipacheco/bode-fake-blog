import sequelizeConnector from "./config/database";
import FakePost from "./models/fake_post";

sequelizeConnector.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
    console.log('---------------------------------------------');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
    return 0;
  });

console.log('Creating blog database. BEEP BOOP.');
console.log('---------------------------------------------');

FakePost.sync({ force: true }).then(() => {
  return FakePost.create({
    author: 'El Mati',
    title: 'Breaking news: Smart is the new sexy!',
    description: 'Is true!',
    content: 'According to an study developed by our fellow nerdizzles, smart is the new sexy!',
  });
});

FakePost.findAll().then(posts => {
  console.log("All posts:", JSON.stringify(posts, null, 4));
});

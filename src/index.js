// /////////////////////////////
// Sequelize use cases
// /////////////////////////////

// FakePost.create({
//   author: 'El Mati',
//   title: 'Breaking news: Smart is the new sexy!',
//   description: 'Is true!',
//   content: 'According to an study developed by our fellow nerdizzles, smart is the new sexy!',
// });
//
// FakePost.findAll().then(posts => {
//   console.log("All posts:", JSON.stringify(posts, null, 4));
// });

import FakePost from "./models/fake_post";

exports.handler = (event, context, callback) => {
  FakePost.create(event)
    .then(newPost => {
      console.log("Post successfully created! ID:", newPost.id);

      callback(null, {
        statusCode: 200,
        body: newPost.toJSON()
      });
    });
};
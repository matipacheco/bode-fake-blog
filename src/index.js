import FakePost from "./models/fake_post";

exports.handler = (event, context, callback) => {

  switch (event.type) {
    case "POST":
      FakePost.create(event.payload)
        .then(newPost => {
          console.log("Post successfully created! ID:", newPost.id);

          callback(null, {
            statusCode: 200,
            body: newPost.toJSON()
          });
        });
      break;

    case "GET":
      FakePost.findAll().then(posts => {
        callback(null, {
          statusCode: 200,
          body: posts
        });
      });
      break;
  }


};
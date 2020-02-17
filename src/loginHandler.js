import User from "./models/user";

exports.handler = (event, context, callback) => {

  User.findOne({ where: { username: event.username } })
    .then(user => {
      callback(null, {
        statusCode: 200,
        message: "User found",
        payload: user
      });
    })
    .catch(() => {
      callback(null, {
        statusCode: 404,
        message: "User not found",
      });
    });

};
import User from "./models/user";
import { encryptPassword } from "./utils";

exports.handler = (event, context, callback) => {

  User.findOne({ where: { username: event.username } })
    .then(user => {
      if (user.password === encryptPassword(event.password, user.salt)) {
        callback(null, {
          statusCode: 200,
          message: "User found",
          payload: user
        });

      } else {
        callback(null, {
          statusCode: 200,
          error: "Invalid password",
        });
      }

    })
    .catch(() => {
      callback(null, {
        statusCode: 404,
        error: "User not found",
      });
    });

};
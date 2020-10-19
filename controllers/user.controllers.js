// import passport from "passport";
// import db from "../database/models"
// // import passportHelper from '../helpers/passport';
// import dotenv from "dotenv";
// import helper from "../helpers";
// import regeneratorRuntime from "regenerator-runtime";

// dotenv.config();
// console.log('DB>>>',db)
// const { User } = db

// class UserController {
//   /* signup */
//   static async addUser(req, res) {
//     passport.authenticate('local_signup', (err, user) => {
//       if (user) {
//         const userData = {
//           id: user.id,
//           username: user.username,
//           email: user.email,
//         };
//         const issueToken = helper.generateToken(user.dataValues);
//         res.status(201).send({
//           status: 201, message: 'User added successfully', token: issueToken, user: userData
//         });
//       }
//       if (err) {
//         res.status(409).send({ status: 409, message: err.parent.detail });
//       }
//     })(req, res);
//   }

// }

// export default UserController;


import passport from "passport";
import dotenv from "dotenv";
import helper from "../helpers";

dotenv.config();

class UserController {
  /* signup */
  static async addUser(req, res) {
    passport.authenticate("local_signup", (err, user) => {
      if (user) {
        const userData = {
          id: user.id,
          name: user.name,
          email: user.email
        };
        console.log('userData>>>>>>',userData)
        const issueToken = helper.generateToken(user.dataValues);
        res.status(201).send({
          status: 201,
          message: "User added successfully",
          token: issueToken,
          user: userData
        });
      }
      if (err) {
        res.status(409).send({ status: 409, message: err.parent.detail });
      }
    })(req, res);
  }

  /* login */

  static async loginUser(req, res) {
    passport.authenticate("local_signin", (err, user) => {
      if (user) {
        const issueToken = helper.generateToken(user.dataValues);
        return res.status(200).send({
          status: 200,
          message: "User logged in successfully",
          token: issueToken
        });
      }
      if (err) {
        return res.status(401).send({ status: 401, err });
      }
    })(req, res);
  }
}

export default UserController;
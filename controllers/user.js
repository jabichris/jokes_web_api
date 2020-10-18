import passport from "passport";
import dotenv from "dotenv";
import helper from "../helpers";

dotenv.config();

class User {
  /* signup */
  static async addUser(req, res) {
    passport.authenticate("local_signup", (err, user) => {
      if (user) {
        const userData = {
          id: user.id,
          email: user.email
        };
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

}

export default User;
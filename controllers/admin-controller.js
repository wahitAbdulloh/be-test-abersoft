const adminService = require("services/admin-service");

const successHandler = require("middleware/success-handler");

const AdminController = {
  login(req, res, next) {
    adminService
      .login(req.body)
      .then((admin) => {
        const result = { login: admin };
        res.json(successHandler(result, "Success"));
      })
      .catch(next);
  },

  getProfile(req, res, next) {
    const { password, ...user } = req.user;
    const result = { profile: user };
    res.json(successHandler(result, "Success"));
  },

  logout(req, res, next) {
    adminService
      .logout(req.headers["authorization"])
      .then(() => {
        res.json(successHandler(null, "Logout Success"));
      })
      .catch(next);
  },
};

module.exports = AdminController;

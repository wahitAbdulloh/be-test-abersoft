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
};

module.exports = AdminController;

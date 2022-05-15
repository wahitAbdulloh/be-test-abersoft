const jwt = require("jsonwebtoken");

const adminData = require("data/admin-data");
let tokenHistories = require("data/token-histories");

const AdminService = {
  async login({ email, password }) {
    const admin = adminData.find(
      (data) => data.email == email && data.password == password
    );

    if (!admin) throw "Username or password is incorrect";

    const token = jwt.sign({ sub: admin.id }, process.env.SECRET);
    return { token: token };
  },

  async logout(authorization) {
    tokenHistories.push(authorization);
  },
};

module.exports = AdminService;

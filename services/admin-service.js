const jwt = require("jsonwebtoken");

const adminData = require("services/admin-data");

const AdminService = {
  async login({ email, password }) {
    const admin = adminData.find(
      (data) => data.email == email && data.password == password
    );

    if (!admin) throw "Username or password is incorrect";

    const token = jwt.sign({ sub: admin.id }, process.env.SECRET, {
      expiresIn: "7d",
    });
    return { token: token };
  },
};

module.exports = AdminService;

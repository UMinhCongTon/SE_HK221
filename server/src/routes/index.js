const accountRoutes = require("./account");

function routes(app) {
  app.use("/", accountRoutes);
}

module.exports = routes;

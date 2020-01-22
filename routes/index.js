const routes = require("../constants/routes");
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('../swagger/swagger.json');

module.exports = app => {

  // lifecycle checks
  app.use(routes.health, require("../routes/health"));
  app.use(routes.inventories, require("../routes/Inventories/"));
  app.use(routes.orders, require("../routes/orders/"));
  app.use('/docs/v1/', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
};

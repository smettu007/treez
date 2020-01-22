const routes = {
    port: process.env.PORT || 3000,
    health: '/health',
    inventories: '/inventories',
    orders: '/orders',
};

module.exports = routes;

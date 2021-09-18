const routesFiles = require.context('./', true, /\/.*\/router\.js$/);
const modulesRoutes = [];

routesFiles.keys().reduce((_, modulePath) => {
  const value = routesFiles(modulePath);
  modulesRoutes.push(...value.default);
}, {});

export default modulesRoutes;

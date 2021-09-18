const servicesFiles = require.context('./', true, /.*\.service\.js$/);
const modulesServices = {};

servicesFiles.keys().reduce((services, modulePath) => {
  //  blue blue service js
  const value = servicesFiles(modulePath);
  modulesServices[value.default.name] = value.default;
  return services;
}, {});

export default {
  install(app) {
    app.config.globalProperties.$services = modulesServices
    app.provide('$services', modulesServices)
  }
};

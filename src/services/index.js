import { inject } from 'vue';

const loadServices = () => {
  const servicesFiles = require.context('./', false, /service.js$/);
  const modulesServices = {};

  servicesFiles.keys().reduce((services, modulePath) => {
    const value = servicesFiles(modulePath);
    modulesServices[value.default.name] = value.default;
    return services;
  }, {});

  return modulesServices;
}

const useServices = () => {
  return inject('services');
}

export default {
  install(app) {
    app.provide('services', loadServices())
  }
};

export {
  useServices,
}

import { inject } from 'vue';
const servicesFiles = require.context('./', true, /.*\.service\.js$/);
const modulesServices = {};

servicesFiles.keys().reduce((services, modulePath) => {
  const value = servicesFiles(modulePath);
  modulesServices[value.default.name] = value.default;
  return services;
}, {});

const useServices = () => {
  return inject('services');
}

export default {
  install(app) {
    app.provide('services', modulesServices)
  }
};

export {
  useServices,
}

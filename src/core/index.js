import { getCurrentInstance, inject } from 'vue';

const useConfig = () => {
  const { appContext } = getCurrentInstance();
  return appContext.config.globalProperties;
}

const useServices = () => {
  return inject('services');
}

export {
  useConfig,
  useServices,
}

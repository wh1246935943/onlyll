import Alert from './src/components/alert';
import Toast from './src/components/toast';
import Modal from './src/components/modal';
import Menu from './src/components/menu';

const components = {
  Modal,
  Menu
};

components.install = (Vue, options = {}) => {
  for (const componentName in components) {
    const component = components[componentName];

    if (component && componentName !== 'install') {
      Vue.component(component.name, component);
    }
  }

  Vue.prototype.$alert = Alert;
  Vue.prototype.$toast = Toast
};

export default components

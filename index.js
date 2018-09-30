import Alert from './alert';
import Toast from './toast';
import Modal from './modal';
import Menu from './menu'

const wui = {
  Modal,
  Menu
};

wui.install = (Vue, options = {}) => {
  for (const componentName in wui) {
    const component = wui[componentName];

    if (component && componentName !== 'install') {
      Vue.component(component.name, component);
    }
  }

  Vue.prototype.$alert = Alert;
  Vue.prototype.$toast = Toast
};

export default wui

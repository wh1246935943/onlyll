import LhDialog from './src/components/Dialog/index.js';
import LhTip from './src/components/Tip/index.js';
import LhModal from './src/components/Modal/index.js';
import LhDropDown from './src/components/DropDown/index.js';
import LhButton from './src/components/Button/index.js';
import LhInput from './src/components/Input/index.js';
import LhAvatar from './src/components/Avatar/index.js';
import LhMenu from './src/components/Menu/index.js';
import LhNavbar from './src/components/Navbar/index.js';
import LhCard from './src/components/Card/index.js';
import LhTag from './src/components/Tag/index.js';
import LhSwipe from './src/components/Swipe/index.js';
import LhSwitch from './src/components/Switch/index.js';

const baseUi = {
  LhModal,
  LhDropDown,
  LhButton,
  LhInput,
  LhAvatar,
  LhMenu,
  LhNavbar,
  LhCard,
  LhTag,
  LhSwipe,
  LhSwitch
};

baseUi.install = (Vue) => {
  for (const componentName in baseUi) {
    const component = baseUi[componentName];

    if (component && componentName !== 'install') {
      Vue.component(component.name, component);
    }
  }

  Vue.prototype.$dialog = LhDialog;
  Vue.prototype.$tip = LhTip
};

export default baseUi

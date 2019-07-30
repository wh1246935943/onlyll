import Vue from 'vue'
import LhTip from './Tip.vue'

function open(propsData) {
  const ToastComponent = Vue.extend(LhTip);
  return new ToastComponent({
    el: document.createElement('div'),
    propsData
  })
}

export default {
  bubble(params) {
    const defaultParam = {
      type: 'bubble',
      position: 'bottom'
    };
    const propsData = Object.assign(defaultParam, params)
    return open(propsData)
  },
  alert(params) {
    const defaultParam = {
      type: 'alert',
      position: 'top'
    };
    const propsData = Object.assign(defaultParam, params)
    return open(propsData)
  }
}

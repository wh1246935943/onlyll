import Vue from 'vue'
import LhDialog from './Dialog.vue'

function open(propsData) {
  const AlertComponent = Vue.extend(LhDialog);
  return new AlertComponent({
    el: document.createElement('div'),
    propsData
  })
}

export default {
  confirm(params) {
    const defaultParam = {
      type: 'confirm'
    };
    const propsData = Object.assign(defaultParam, params)
    return open(propsData)
  },
  prompt(params) {
    const defaultParam = {
      type: 'prompt'
    };
    const propsData = Object.assign(defaultParam, params)
    return open(propsData)
  }
}

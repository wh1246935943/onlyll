<template>
  <div
    class="lh-switch"
    :class="{'switch-on-bg': value}"
    @click="switchChange">
    <div
      class="switch-btn"
      :class="{'switch-on-btn': value}"
    ></div>
  </div>
</template>
<script>
export default {
  name: 'LhSwitch',
  data() {
    return {
      // switchStatus: false
    }
  },
  props: {
    value: Boolean
  },
  watch: {
    // value(val) {
    //   this.switchStatus = val
    // }
  },
  methods: {
    switchChange() {
      // this.switchStatus = !this.switchStatus;
      this.$emit('input', !this.value)
    }
  }
}
</script>

<style lang="scss">
.lh-switch{
  display: inline-block;
  position: relative;
  box-sizing: content-box;
  width: 45px;
  height: 25px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 1em;
  transition: background-color 0.3s;
  .switch-btn{
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-radius: 100%;
    box-shadow: 0 3px 1px 0 rgba(0, 0, 0, 0.05), 0 2px 2px 0 rgba(0, 0, 0, 0.1), 0 3px 3px 0 rgba(0, 0, 0, 0.05);
    transition: 0.3s;
  }
  .switch-on-btn{
    left: 100%;
    transform: translateX(-100%)
  }
  &.switch-on-bg{
    background-color: $primary;
  }
}
</style>

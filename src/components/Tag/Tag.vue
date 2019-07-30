<template>
  <span
    class="lh-tag"
    :class="[`lh-tag-${size}`]"
    :style="{borderRadius: radius+'px'}"
  >
    <slot></slot>
    <i
      v-if="closable"
      @click="closeTag"
      class="iconfont iconclose lh-icon-close"
      :class="[`lh-icon-close-${size}`]"
    ></i>
  </span>
</template>
<script>
export default {
  name: 'LhTag',
  props: {
    size: {
      type: String, // medium small mini
      default: 'default'
    },
    closable: {
      type: Boolean,
      default: false
    },
    radius: String
  },
  computed: {
    // ...
  },
  methods: {
    closeTag() {
      this.$emit('close')
    }
  }
}
</script>
<style lang="scss">
.lh-tag{
  background-color: $primary;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 0 10px;
  height: 32px;
  line-height: 30px;
  font-size: 12px;
  color: $fontcolor;
  border-radius: 4px;
  box-sizing: border-box;
  white-space: nowrap;
  &.lh-tag-medium{
    height: 28px;
  }
  &.lh-tag-small{
    height: 24px;
    padding: 0 8px;
  }
  &.lh-tag-mini{
    font-size: 12px;
    height: 20px;
    padding: 0 5px;
  }
  .lh-icon-close{
    border-radius: 50%;
    text-align: center;
    position: relative;
    cursor: pointer;
    font-size: 12px;
    height: 16px;
    width: 16px;
    line-height: 16px;
    vertical-align: middle;
    top: -1px;
    right: -5px;
    color: $primary;
    &.lh-icon-close-medium{
      transform: scale(.8);
    }
    &.lh-icon-close-small{
      transform: scale(.75);
    }
    &.lh-icon-close-mini{
      transform: scale(.7);
    }
  }
}
</style>

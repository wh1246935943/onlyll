<template>
  <div class="lh-modal" v-if="isModal">
    <div class="modal-background" @click="$emit('close')"></div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'LhModal',
  data() {
    return {

    }
  },
  props: {
    isModal: {
      type: Boolean,
      default: false
    },
    cardSize: String,
    title: String,
    isTitle: Boolean,
    isCloseBtn: Boolean
  }
}
</script>
<style lang="scss">
.lh-modal{
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  .modal-background{
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
  }
  .lh-modal-card{
    display: flex;
    flex-direction: column;
    border-radius: 4px;
    .lh-modal-title{
      background: #565656;
      padding: 5px 10px;
      display: flex;
      color: #fff;
      justify-content: space-between;
      i{
        cursor: pointer;
      }
    }
  }
  .close{
    width: 30px;
    height: 30px;
    position: absolute;
    right: 0;
    top: 0;
    text-align: center;
    line-height: 30px;
    .icon-guanbi1{
      color: #fff;
    }
    &:active{
      background: red;
      cursor: pointer;
    }
  }
}
</style>

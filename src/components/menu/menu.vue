<template>
  <div
    :class="['lh-menu', custom]"
    :style="{width: menuWidth}"
  >
    <div
      class="background"
      v-if="isMenuList"
      @click="close"
    ></div>
    <slot></slot>
    <div
      class="menu-contains"
      :class="[position]"
      v-if="isMenuList"
      :style="{width: menuWidth}"
    >
      <div
        class="menu-item"
        v-for="(item, index) in list"
        :key="index"
        @click="selectItme(item, index)"
      >
        <slot name="itemLeft" v-if="$slots.itemLeft"></slot>
        <span>{{item.name || item}}</span>
        <slot name="itemRight" v-if="$slots.itemRight"></slot>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LhMenu',
  data() {
    return {
      menuWidth: ''
    }
  },
  props: {
    list: Array,
    position: String,
    title: String,
    custom: String,
    width: String,
    height: String,
    isMenuList: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    this.menuWidth = (this.width ? this.width : this.$slots.default[0].elm.scrollWidth+'px')
  },
  methods: {
    selectItme(item, index) {
      this.$emit('select-item', item, index);
      this.$emit('close');
    },
    close() {
      this.$emit('close');
    },
    destroyElement() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
  }
}
</script>
<style lang="scss">
.lh-menu{
    display: inline-block;
    position: relative;
    user-select: none;
    .background{
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
      z-index: 999;
    }
    .menu-contains{
      position: absolute;
      width: auto;
      height: auto;
      background: #fff;
      padding: 10px 0;
      box-shadow: 0px 0px 6px rgba(136,136,136, 0.39);
      z-index: 999;
      .menu-item{
        width: 100%;
        height: 32px;
        font-size: 12px;
        cursor: pointer;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        padding: 0 10px;
        &:active{
          background: $info;
        }
        i{
          margin-right: 10px;
        }
      }
    }
    .dropdown-inputpromp{
      width: 570px;
      position: absolute;
      top: 35px;
      left: -10px;
      border: 1px solid $primary;
      display: flex;
      flex-direction: column;
      background: #fff;
      z-index: 999;
      box-shadow: 0 3px 5px rgba(0,0,0,.3);
      &::before{
        content: "";
        position: absolute;
        top: -10px;
        left: 8px;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid $primary;
      }
      &::after{
        content: "";
        position: absolute;
        top: -9px;
        left: 8px;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 10px solid #fff;
      }
      .dropdown-inputpromp-head{
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 30px;
        line-height: 30px;
        padding: 0 10px;
        p{
          margin: 0;
        }
        i{
          cursor: pointer;
        }
      }
      .dropdown-inputpromp-section{
        padding: 20px 10px;
        input{
          width: 100%;
          height: 35px;
          outline: none;
          border: none;
          color: #424e67;
          border: 1px solid $disabled;
          border-radius: 2px;
          box-shadow: 0 1px 2px $disabled inset;
          padding-left: 10px;
        }
        .is-warning{
          border: 1px solid #f56c6c;
          box-shadow: 0 1px 2px #f56c6c inset;
        }
        .tip-message{
          color: #f56c6c;
          font-size: 12px;
          height: 14px;
        }
      }
      .dropdown-inputpromp-footer{
        padding: 0 0 15px 0;
        display: flex;
        justify-content: flex-start;
        .button{
          margin-left: 10px;
        }
      }
    }
  }
</style>

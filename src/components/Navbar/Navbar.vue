<template>
  <div class="lh-navbar flex-between-row">
    <div class="left" @click="clickLeftBtn">
      <i v-if="iconLeft" class="iconfont" :class="iconLeft"></i>
      <img v-if="imgLeft" class="between-img" :src="imgLeft">
      <slot name="left" v-if="$slots.left"></slot>
    </div>
    <div class="center" @click="clickCenterBtn">
      {{title}}
      <slot name="center" v-if="$slots.center"></slot>
    </div>
    <div class="right" @click="clickRightBtn">
      <i v-if="iconRight" class="iconfont" :class="iconRight"></i>
      <img v-if="imgRight" class="between-img" :src="imgRight">
      <slot name="right" v-if="$slots.right"></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LhNavbar',
  data() {
    return {
      // ...
    }
  },
  props: {
    iconLeft: String,
    imgLeft: String,
    iconRight: String,
    imgRight: String,
    title: String
  },
  methods: {
    clickLeftBtn() {
      console.log('click-left');
      this.$emit('click-left')
    },
    clickCenterBtn() {
      console.log('click-center');
      this.$emit('click-center')
    },
    clickRightBtn() {
      console.log('click-right');
      this.$emit('click-right')
    }
  }
}
</script>
<style lang="scss">
.lh-navbar{
  width: 100%;
  height: 50px;
  padding: 0 10px;
  font-weight: 600;
  background: $bgColor;
  border-bottom: $border;
  .left{
    max-width: 100px;
    object-fit: cover;
    width: 25px;
    height: 25px;
  }
  .center{
    max-width: calc(100% - 200px);
  }
  .right{
    max-width: 100px;
    object-fit: cover;
    width: 25px;
    height: 25px;
  }
  .between-img{
    width: 24px;
    height: 24px;
  }
}
</style>

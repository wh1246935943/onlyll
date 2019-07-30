<template>
  <div 
    class="lh-card flex-between-row"
    @click="clickCard"
  >
    <lh-avatar
      class="card-avatar"
      v-if="isAvatar"
      :radius="avatarRadius"
      :src="avatarSrc"
    ></lh-avatar>
    <div class="card-contains full-width">
      <div class="card-title text-ellipsis flex-between-row">
        <span class="title">{{title}}</span>
        <slot name="cardTitleRight"></slot>
      </div>
      <div class="infos text-ellipsis">
        {{info}}
        <slot name="cardInfo"></slot>
      </div>
    </div>
    <slot name="cardRight" v-if="$slots.cardRight"></slot>
    <i v-if="!$slots.cardRight && isRightArrow" class="iconfont iconright"></i>
    <span 
      class="tip" 
      v-if="isTip" 
      :class="tipMsg?'msg-tip':''"
      @click="clickTip"
    >{{tipMsg}}</span>
  </div>
</template>
<script>
export default {
  name: 'LhCard',
  props: {
    isAvatar: {
      type: Boolean,
      default: true
    },
    avatarRadius: String || Number,
    avatarSrc: String,
    title: String || Number,
    info: String || Number,
    tipMsg: String || Number,
    isTip: {
      type: Boolean,
      default: false
    },
    isRightArrow: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    // 点击tip提示
    clickTip() {
      this.$emit('tip-click')
    },
    // 点击卡片
    clickCard() {
      this.$emit('click')
    }
  }
}
</script>
<style lang="scss">
.lh-card{
  width: 100%;
  min-height: 60px;
  position: relative;
  padding: $padding;
  background: $bgColor;
  border-bottom: $border;
  // border-top: $border;
  .card-avatar{
    margin-right: 20px;
  }
  .card-contains{
    overflow: hidden;
    .card-title{
      color: #a5a5a5;
      .title{
        color: $titleTxt;
        font-weight: 600;
        font-size: 15px;
      }
    }
    .infos{
      color: $titleInfo;
      padding-top: 2px;
      font-size: 12px;
    }
  }
  .tip{
    position: absolute;
    top: 15px;
    right: 15px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: $primary;
    min-width: 10px;
    min-height: 10px;
    border-radius: 7px;
  }
  .msg-tip{
    min-width: 16px;
    padding: 0 3px;
    color: #fff;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    background-color: $primary;
    border-radius: 16px;
  }
}
</style>

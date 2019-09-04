<template>
  <div 
    class="lh-tip"
    ref="lhTip"
    :class="[
      `lh-tip-${position}`,
      `lh-tip-${type}`,
      `is-${alertType}`,
      animation
    ]"
    v-if="isTip"
  >
    <i
      v-if="isAlert"
      class="iconfont"
      :class="`icon${alertType}`"
    ></i>
    <div class="lh-tip-msg">
      <i v-if="type==='loading'" class="iconfont iconloading1"></i>
      {{msg}}
    </div>
  </div>
</template>
<script>
export default {
  name: 'LhToast',
  data () {
    return {
      isTip: true,
      animation: 'fadel-in-top',
      noAnim: ['bubble', 'loading']
    }
  },
  props: {
    msg: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'bubble'
    },
    delay: {
      type: Number,
      default: 3000
    },
    position: {
      type: String,
      default: 'bottom'
    },
    alertType: {
      type: String,
      default: 'success'
    },
  },
  computed: {
    isAlert() {
      return this.type === 'alert'
    }
  },
  beforeMount() {
    document.body.appendChild(this.$el);
    if (this.noAnim.includes(this.type)) this.animation = ''
  },
  mounted() {
    if (this.type === 'loading') return
    setTimeout(() => {
      if (this.noAnim.includes(this.type)) {
        this.isTip = false;
        return;
      }
      this.animation = 'fadel-out-top';
      setTimeout(() => {
        this.isTip = false;
      }, 300)
    }, this.delay)
  }
}
</script>
<style lang="scss">
.lh-tip{
  display: inline-block;
  z-index: 1000;
  position: fixed;
  user-select: none;
  overflow: hidden;
  color: $fontcolor;
  &.lh-tip-bubble{
    left: 50%;
    transform: translateX(-50%);
    max-width: 90%;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 5px;
    box-shadow: 0 3px 5px rgba(0,0,0,.3);
  }
  &.lh-tip-alert{
    width: 100%;
    min-height: 50px;
    border-radius: 0;
    display: inline-flex;
    align-items: center;
    .iconfont{
      display: block;
      color: rgba(0,0,0,0.3);
      margin-left: 10px;
    }
    .lh-tip-msg{
      width: 93%;
    }
    &.lh-tip-top{
      top: 0;
    }
    &.is-success{
      background-color: #4caf50;
    }
    &.is-error{
      background-color: #ff5252;
    }
    &.is-warning{
      background-color: #fb8c00;
    }
    &.is-info{
      background-color: #2196f3;
    }
  }
  .lh-tip-msg{
    display: inline-block;
    padding: 8px 20px;
    word-wrap: break-word;
  }
  &.lh-tip-bottom{
    bottom: 50px;
  }
  &.lh-tip-top{
    top: 50px;
  }
  &.lh-tip-loading{
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    .lh-tip-msg{
      display: inline-block;
      max-width: 90%;
      background-color: rgba(0, 0, 0, 0.6);
      border-radius: 5px;
      vertical-align: middle;
      .iconfont{
        display: inline-block;
        color: #fff;
        margin-right: 5px;
        animation: lhrotate 0.8s linear infinite;
      }
    }
  }
}
</style>

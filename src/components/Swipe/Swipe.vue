<template>
  <div class="lh-swipe">
    <div 
      class="img-box"
      ref="swipeImgBox"
      @touchstart="onTouchstart($event)"
      @touchmove="onTouchmove($event)"
      @touchend="onTouchend($event)"
    >
      <div
        class="img-swipe-track"
        :style="{
          width: `${trackWidth}px`,
          transform: `translateX(-${transformWidth}px)`,
          transitionDuration: '500ms'
        }"
      >
        <div
          v-for="(item, index) in imgs"
          :key="index"
          class="img"
          :style="{
            width: `${imgBoxItemWidth}px`,
          }"
          @click="clickItem(item, index)"
        >
          <img :src="item[imgKey]||item">
          <slot name="imgContent"></slot>
        </div>
      </div>
    </div>
    <div class="lh-swipe-indicators">
      <span
        class="lh-swipe-indicator"
        :class="currentIndex===index?'highlight-indicator':''"
        v-for="(item, index) in imgs"
        :key="index"
        @click.stop="selectIndicator(index)"
      ></span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LhSwipe',
  data() {
    return {
      // 当前图片得索引
      currentIndex: 0,
      // 用于存储定时器，方便清除
      timer: null,
      // 滑动轨道的宽度
      trackWidth: Number,
      // 每个图片的宽度
      imgBoxItemWidth: Number,
      // 当前图片的切换偏移
      transformWidth: Number,
      // 当手指按下屏幕时记录的位置
      clientStartX: Number,
      // 滑动结束时的位置
      clientEndX: Number
    }
  },
  props: {
    imgs: Array,
    // 自动播放的时间间隔
    autoplay: {
      type: Number || String,
      default: 3000
    },
    // 顶部切换圆点
    indicators: {
      type: Boolean,
      default: true
    },
    imgKey: String
  },
  watch: {
    currentIndex() {
      this.transformWidth = this.imgBoxItemWidth * this.currentIndex
    }
  },
  created() {
    if (this.autoplay) this.swipeAutoplay()
  },
  mounted() {
    // 获取图片当前宽度
    this.imgBoxItemWidth = this.$refs.swipeImgBox.clientWidth;
    // 获取图片滑动得轨道宽度
    this.trackWidth = this.imgBoxItemWidth * this.imgs.length;
    // 初始化首次显示得图片移动位置
    this.transformWidth = this.imgBoxItemWidth * this.currentIndex
  },
  methods: {
    // 鼠标点击当前图片时触发事件
    clickItem(item, index) {
      this.$emit('onClick', item, index)
    },
    /**
     * 设置定时器
     */
    swipeAutoplay() {
      this.timer = setInterval(() => {
        this.swipeChange()
      }, this.autoplay)
    },
    /**
     * 轮播图发生更新后触发事件，
     */
    swipeChange(index) {
      this.$emit('onChange', index)
      if (index+1) {
        this.currentIndex = index;
        return
      }
      if (this.currentIndex === this.imgs.length-1) {
        this.currentIndex = 0;
        return
      }
      this.currentIndex++
    },
    /**
     * 点击或者滑动，时轮播图做出反馈
     */
    selectIndicator(index) {
      // 先清除定时器，因为当点击切换图片后，需要在等待对应时间才能再次自动更新
      clearInterval(this.timer);
      // 点击事件发生
      this.swipeChange(index);
      // 注册定时器
      this.swipeAutoplay()
    },
    onTouchstart(e) {
      clearInterval(this.timer);
      this.clientStartX = e.changedTouches[0].clientX
    },
    onTouchmove(e) {
      this.clientEndX = e.changedTouches[0].clientX;
      let diff = this.clientEndX - this.clientStartX;
      if (diff > 0) {
        this.transformWidth -= this.clientEndX - this.clientStartX;
        return
      }
      this.transformWidth += this.clientStartX - this.clientEndX;
      if (this.transformWidth > (this.trackWidth - this.imgBoxItemWidth)) {
        this.transformWidth = this.trackWidth - this.imgBoxItemWidth
      }
    },
    onTouchend() {
      this.swipeAutoplay();
      let diff = this.clientEndX - this.clientStartX;
      if (diff > 0 && this.currentIndex > 0) {
        this.currentIndex--;
        this.$emit('onChange', this.currentIndex);
        return
      }
      if (this.currentIndex < this.imgs.length-1 && diff < 0) {
        this.currentIndex++;
        this.$emit('onChange', this.currentIndex);
      }
    }
  }
}
</script>
<style lang="scss">
.img-swipe{
  height: 150px;
  position: relative;
  .img-box{
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
    position: relative;
    .img-swipe-track{
      height: 100%;
      .img{
        float: left;
        width: 100%;
        height: 100%;
        img{
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
  }
  .lh-swipe-indicators{
    position: absolute;
    bottom: 35px;
    left: 50%;
    display: flex;
    transform: translateX(-50%);
    .lh-swipe-indicator{
      width: 6px;
      height: 6px;
      background-color: #ebedf0;
      border-radius: 100%;
      opacity: 0.3;
      transition: opacity 0.2s;
      &.highlight-indicator{
        opacity: 1;
      }
    }
    .lh-swipe-indicator:not(:last-child) {
      margin-right: 6px;
    }
  }
}
</style>

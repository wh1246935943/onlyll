<template>
  <div
    class="lh-input"
    :class="[custom, className]"
    :style="{pointerEvents: disabled?'none':''}"
    @click="clickInput"
  >
    <div class="lh-input-contains">
      <div
        v-if="$slots.left"
        class="lh-input-slot"
      >
        <slot name="left"></slot>
      </div>
      <input
        :id="id"
        class="input"
        :placeholder="placeholder"
        :type="type"
        :value="inputValue"
        @input="onInput"
        @focus="onFocus"
        @blur="onBlur"
        :style="{pointerEvents: search?'none':''}"
      >
      <div
        v-if="$slots.right"
        class="lh-input-slot"
      >
        <slot name="right"></slot>
      </div>
    </div>
    <div class="lh-input-line" :class="activeLine"></div>
  </div>
</template>
<script>
export default {
  name: 'LhInput',
  data() {
    return {
      inputValue: '',
      activeLine: String
    }
  },
  props: {
    value: [Number, String],
    id: String,
    // 自定义样式
    custom: String,
    placeholder: String,
    fullSize: Boolean,
    type: String,
    disabled: Boolean,
    search: Boolean
  },
  computed: {
    className() {
      return {
        'lh-input-fullsieze': this.fullSize
      }
    }
  },
  watch: {
    value: {
      handler: function(val) {
        console.log('lh-input:::', val);
        this.inputValue = val
      },
      immediate: true
    }
  },
  methods: {
    clickInput() {
      this.$emit('click', this.inputValue);
    },
    onInput(event) {
      this.$emit('input', event.target.value)
    },
    onFocus(event) {
      this.activeLine = 'lh-input-activeline'
      this.$emit('focus', event);
    },
    onBlur(event) {
      this.activeLine = ''
      this.$emit('blur', event)
    }
  }
}
</script>
<style lang="scss">
.lh-input{
	width: 250px;
	display: inline-block;
	position: relative;
	border-bottom: 1px solid rgba(0,0,0,0.42);
	.lh-input-contains{
		width: 100%;
		height: 40px;
		display: inline-flex;
		justify-content: space-between;
		.lh-input-slot{
			min-width: 30px;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
      padding: 0 5px;
		}
		.input{
			flex: 1;
			padding: 0 10px;
			outline: none;
			border: none;
		}
	}
	.lh-input-line{
		position: absolute;
		bottom: -1px;
		width: 100%;
		height: 2px;
		background: $primary;
		transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
		transform: scaleX(0);
	}
	.lh-input-activeline{
		transform: scaleX(1);
	}
	&.lh-input-fullsieze{
		width: 100%;
	}
}
</style>

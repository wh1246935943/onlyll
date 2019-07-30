<template>
  <div
    :class="['lh-button', classNames, custom]"
    @click.stop="click"
  >
    <i
      v-if="icon"
      :class="['icon', icon]"
      @click="iconClick"
    ></i>
    <span v-if="icon" class="icon-margin"></span>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'LhButton',
  props: {
    // 默认
    primary: {
      type: Boolean,
      default: false
    },
    // 信息样式
    info: {
      type: Boolean,
      default: false
    },
    // 取消样式
    cancel: {
      type: Boolean,
      default: false
    },
    // 是否可点击
    disabled: {
      type: Boolean,
      default: false
    },
    // 是否开启icon
    icon: {
      type: String,
      default: ''
    },
    // icon位置
    iconAfter: {
      type: Boolean,
      default: false
    },
    // 按钮小寸
    small: {
      type: Boolean,
      default: false
    },
    // 按钮大尺寸
    large: {
      type: Boolean,
      default: false
    },
    // 按钮占满宽度
    fullSize: {
      type: Boolean,
      default: false
    },
    custom: String
  },
  computed: {
    classNames() {
      return {
        'is-primary' : this.primary,
        'is-cancel' : this.cancel,
        'is-disabled': this.disabled,
        'icon-after': this.iconAfter,
        'is-info': this.info,
        'lh-button-small': this.small,
        'lh-button-large': this.large,
        'lh-button-block': this.fullSize
      }
    }
  },
  methods: {
    click() {
      if (this.disabled) return; 
      this.$emit('click')
    },
    iconClick() {
      if (this.disabled) return; 
      this.$emit('icon-click')
    }
  }
}
</script>
<style lang="scss">
.lh-button{
	align-items: center;
	border-radius: 2px;
	display: inline-flex;
	height: 35px;
	flex: 0 0 auto;
	font-size: 14px;
	font-weight: 500;
	justify-content: center;
	margin: 6px 8px;
	min-width: 88px;
	outline: 0;
	text-decoration: none;
	transition: $transition;
	position: relative;
	vertical-align: middle;
	user-select: none;
	color: $fontcolor;
	box-shadow: $shadow;
	.icon-margin{
		display: inline-block;
		width: 5px;
	}
	background-color: $primary;
	&:active{
		background-color: $dark;
	}
	&:active{
		box-shadow: $activeshadow
	}
	&.lh-button-small{
		font-size: 13px;
		height: 28px;
		padding: 0 8px;
	}
	&.lh-button-large{
		font-size: 15px;
		height: 40px;
		padding: 0 32px;
	}
	&.lh-button-block{
		font-size: 15px;
		height: 40px;
		width: 100%;
		margin: 6px 0;
	}
	
	&.is-primary{
		background-color: $primary;
		&:active{
			background-color: $dark;
		}
	}
	
	&.is-info{
		background-color: $info;
		color: #000;
		&:active{
			color: $fontcolor
		}
	}
	
	&.is-cancel{
		background-color: $cancel;
		&:active{
			background-color: $canceldark;
		}
	}
	
	&.icon-after{
		flex-direction: row-reverse;
	}
	
	&.is-disabled{
		background-color: $disabled;
		cursor: not-allowed;
		&:active{
			background-color: $disabled;
		}
		&:active{
			box-shadow: $shadow;
		}
	}
}

</style>

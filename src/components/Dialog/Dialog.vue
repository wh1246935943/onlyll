<template>
  <div
    :class="['lh-dialog', className]"
    v-if="isDialog"
    @click.self="bgClose"
  >
    <div class="warp">
      <header v-if="title" class="lh-dialog-head">
        <p>{{title}}</p>
        <i class="icon-close" @click="isDialog=false"></i>
      </header>
      <section class="lh-dialog-section">
        <div v-if="type==='prompt'" class="input">
          <input
            type="text"
            v-model="inputValue"
            v-bind="inputAttrs"
            @keyup.enter="confirm"
          >
        </div>
        <div v-else-if="type==='confirm'" class="info">{{confirmText}}</div>
      </section>
      <footer class="lh-dialog-footer">
        <lh-button primary @click="confirm">{{buttonConfirmTxt}}</lh-button>
        <lh-button cancel @click="cancel">{{buttonCancelTxt}}</lh-button>
      </footer>
    </div>
  </div>
</template>
<script>
export default {
  name: 'LhDialog',
  data() {
    return {
      isDialog: false,
      inputValue: ''
    }
  },
  props: {
    title: String,
    inputAttrs: {
      type: Object,
      default: () => {}
    },
    confirmText: {
      type: String,
      default: ''
    },
    buttonConfirmTxt: {
      type: String,
      default: 'Confirm'
    },
    buttonCancelTxt: {
      type: String,
      default: 'Cancel'
    },
    className: {
      type: String,
      default: ''
    },
    type: String,
    outClose: {
      type: Boolean,
      default: true
    },
    onConfirm: {
      type: Function,
      default: () => {}
    },
    onCancel: {
      type: Function,
      default: () => {}
    }
  },
  computed: {
    isProper() {
      if (this.type === 'prompt') {
        return !this.inputValue.match(/^\s*$/g)
      } else {
        return true
      }
    }
  },
  methods: {
    // 点击背景关闭
    bgClose() {
      if (!this.outClose) return;
      this.isDialog = false;
    },
    close() {
      this.isDialog = false;
    },
    cancel() {
      this.close();
      this.onCancel()
    },
    confirm() {
      this.onConfirm(this.inputValue.replace(/\s/g, ''));
      this.close();
    }
  },
  beforeMount() {
    document.body.appendChild(this.$el);
  },
  mounted() {
    this.isDialog = true;
  }
}
</script>
<style lang="scss">
.lh-dialog{
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	z-index: 1000;
	background: rgba(0, 0, 0, 0.6);
	display: flex;
	justify-content: center;
	align-items: center;
	user-select: none;
	.warp{
		display: flex;
		flex-direction: column;
		min-width: 270px;
		border: 1px solid $primary;
		background: #fff;
		overflow: hidden;
		padding: 10px;
		.lh-dialog-head{
			display: flex;
			justify-content: space-between;
			align-items: center;
			height: 30px;
			line-height: 30px;
			p{
				margin: 0;
			}
			i{
				cursor: pointer;
			}
		}
		.lh-dialog-section{
			.input{
				padding: 10px 0;
				display: flex;
				justify-content: center;
				input{
					width: 100%;
					height: 35px;
					outline: none;
					border: none;
					color: #424e67;
					border-bottom: 1px solid #1296db;
				}
			}
			.info{
				padding: 20px 0;
			}
		}
		.lh-dialog-footer{
			padding: 0 0 15px 0;
			display: flex;
			justify-content: flex-start;
			.lh-button{
				margin-right: 10px;
			}
		}
	}
}
</style>

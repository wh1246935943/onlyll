<template>
  <div
    class="lh-avatar"
    :class="[size,type,offline?'is-offline':null]"
    :style="{
      borderRadius: radius+'px'
    }"
    @click="avatarClick"
  >
    <img
			v-if="isImage"
			class="imgs"
			:src="src"
			@error="imgError" >
    <span v-else class="content">{{userInitial}}</span>
  </div>
</template>

<script>
export default {
  name: 'LhAvatar',
  props: {
    size: {
      type: String,
      default: 'is-medium'
    },
    type: {
      type: String,
      default: 'is-image'
    },
    src: {
      type: String
    },
    radius: {
      type: String,
      default: '50'
    },
    initials: {
      type: String
    },
    content: String,
    offline: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      defaultSrc: require('@assets/logo.png')
    }
  },
  computed: {
    isImage() {
      return this.type === 'is-image'
    },
    userInitial() {
      const initials = this.initials || this.initial(this.content)
      return initials
    }
	},
  methods: {
    // 点击头像
    avatarClick() {
      // ...
    },
    imgError(e) {
      e.target.src = this.defaultSrc
    },

    initial(username) {
			if (!username) return;
      let parts = username.split(/[ -]/)
      let initials = ''

      for (let i = 0; i < parts.length; i++) {
        initials += parts[i].charAt(0)
      }

      if (initials.length > 3 && initials.search(/[A-Z]/) !== -1) {
        initials = initials.replace(/[a-z]+/g, '')
      }

      initials = initials.substr(0, 3).toUpperCase()
      return initials
    }
  }
}
</script>
<style lang="scss">
.lh-avatar {
  position: relative;
  overflow: hidden;
  // 大小
  &.is-medium {
    width: 50px;
    height: 50px;
  }

  &.is-large {
    width: 100px;
    height: 100px;
  }

  // 类型
  &.is-image {
    .imgs {
			width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  &.is-content {
		display: inline-flex;
    font-weight: bold;
    color: $fontcolor;
    line-height: 25px;

    background-origin: content-box;
    background-color: $primary;
    .content {
      margin: auto;
    }
  }

  // 头像置灰
  &.is-offline {
    filter: grayscale(100%);
  }
}
</style>



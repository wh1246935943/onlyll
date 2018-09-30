<template>
    <div
      class="contextmenu"
      ref="contextmenu"
      v-if="isContextmenu"
      :style="contextmenuPos"
    >
      <div
        class="menu-item"
        v-for="(item, index) in contextmenuList"
        :key="index"
        @click="selectItme(item, index)"
      >
        {{item}}
      </div>
    </div>
</template>

<script>
export default {
  name: 'wMenu',
  data() {
    return {}
  },
  props: {
    contextmenuList: Array,
    contextmenuPos: Object,
    parenteItem: Object,
    isContextmenu: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    document.addEventListener('click', this.closeContextmenu)
  },
  methods: {
    selectItme(item, index) {
      this.$emit('select-item', this.parenteItem, item, index);
      this.$emit('close');
    },
    closeContextmenu(e) {
      let contextmenuBox = this.$refs.contextmenu;
      if (contextmenuBox === undefined) return;
      if (!contextmenuBox.contains(e.target)) this.$emit('close');
    }
  }
  // destroyed() {
  //   console.log('destroyed 当组....');
  //   document.removeEventListener('click', this.closeContextmenu);
  // }
}
</script>

<style lang="scss" scoped>
.contextmenu{
  top: 150px;
  left: 430px;
  position: fixed;
  width: 100px;
  height: auto;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 0px 6px #888888;
  .menu-item{
    width: 100%;
    padding: 7px 0;
    text-align: center;
    cursor: pointer;
    &:hover{
      background: #c5c5c5;
      color: #fff;
    }
  }
}
</style>

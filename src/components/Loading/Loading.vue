<template>
  <div class="lh-loading">
    
  </div>
</template>
<script>
export default {
  name: 'LhLoading',
  data () {
    return {
      // ...
    }
  },
  props: {
    // ...
  },
  computed: {
    // ...
  },
  beforeMount() {
    document.body.appendChild(this.$el);
  },
  mounted() {
    // ...
  }
}
</script>
<style lang="scss">
.lh-loading{
  position: fixed;
  z-index: 1000;
  user-select: none;
  overflow: hidden;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.6);
}
</style>

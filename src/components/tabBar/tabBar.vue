<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
  data: function() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="stylus">
div
  width 100%
  height 100%
  display flex
  justify-content center
  align-items center
</style>

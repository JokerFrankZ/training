<template>
  <transition name="fade">
    <slot></slot>
  </transition>
</template>

<script>
export default {
  name: 'myTransition',
  data: function() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="stylus">
.fade-enter-active, .fade-leave-active
  transition opacity .3s
.fade-enter, .fade-leave-to
  opacity 0
</style>

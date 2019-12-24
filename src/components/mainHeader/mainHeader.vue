<template>
  <div>
    <h1>{{ $route.meta.title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'mainHeader',
  data: function() {
    return {}
  },
  methods: {}
}
</script>

<style scoped lang="stylus">
@import '~@/assets/css/index'
div
  width 100%
  height 100%
  background $headerColor
  display flex
  justify-content center
  align-items center
  h1
    font-size 20px
    color #fff
    font-family '微软雅黑'
    font-weight normal
</style>

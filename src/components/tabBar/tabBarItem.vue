<template>
  <div @click="goTo(path)" :class="iSstyle">
    <div class="item-svg">
      <slot name="svg"></slot>
    </div>
    <div class="item-text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabBarItem',
  components: {},
  props: {
    path: String
  },
  data: function() {
    return {}
  },
  computed: {
    isActive() {
      return this.$route.path === this.path
    },
    iSstyle() {
      return { active: this.isActive }
    }
  },
  methods: {
    goTo(url) {
      if (this.$route.path === this.path) {
        return
      }
      this.$router.push(url)
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/css/color'
div
  width 100%
  height 100%
  display flex
  align-items center
  flex-direction column
  transition all .3s ease
  .item-svg
    display flex
    flex-direction column
    justify-content flex-end
    .icon
      width 20px
      height 20px
      fill #fff
  .item-text
    display flex
    justify-content center
    align-items center
    color #fff
    font-size 12px
.active
  background #ffc0cb
  .item-text
    color #25aef3
  .item-svg
    .icon
      fill #25aef3
</style>

<template>
  <div>
    <div class="main-Header">
      <main-header />
    </div>
    <div class="main-content">
      <my-transition>
        <keep-alive>
          <router-view />
        </keep-alive>
      </my-transition>
    </div>
    <div class="main-tab-bar">
      <main-tab-bar />
    </div>
  </div>
</template>

<script>
import mainHeader from '@/components/mainHeader/mainHeader'
import mainTabBar from '@/components/mainTabBar/mainTabBar'
import myTransition from '@/components/myTransition/myTransition'
export default {
  name: 'index',
  data: function() {
    return {}
  },
  components: {
    mainHeader,
    mainTabBar,
    myTransition
  },
  methods: {}
}
</script>

<style scoped lang="stylus">
@import '~@/assets/css/index'
.main-Header,
.main-tab-bar
  width 100vw
  height 50px
  position fixed
  z-index 999
.main-Header
  top 0
.main-tab-bar
  bottom 0
.main-content
  width 100vw
  height 100vh
</style>

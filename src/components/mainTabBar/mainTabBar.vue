<template>
  <div>
    <tab-bar>
      <tab-bar-item
        v-for="(item, index) in list"
        :key="index"
        :path="item.path"
      >
        <template v-slot:svg>
          <svg class="icon" aria-hidden="true">
            <use :xlink:href="item.svg"></use>
          </svg>
        </template>
        <template v-slot:text>
          <span>{{ item.text }}</span>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import tabBar from '@/components/tabBar/tabBar'
import tabBarItem from '@/components/tabBar/tabBarItem'
export default {
  name: 'mainTabBar',
  data: function() {
    return {
      list: [
        { text: '客户管理', svg: '#iconkehu', path: '/customerInfoManage' },
        {
          text: '联系人管理',
          svg: '#iconlianxiren',
          path: '/contactInfoManage'
        },
        { text: '客户服务', svg: '#iconfuwu', path: '/servicesManage' },
        { text: '客户关怀', svg: '#iconsgh', path: '/customerServices' },
        { text: '综合查询', svg: '#iconzonghechaxun1', path: '/generalQuery' }
      ]
    }
  },
  components: {
    tabBar,
    tabBarItem
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
</style>

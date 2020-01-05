<template>
  <div class="content">
    <van-cell-group title="查询结果">
      <van-cell v-for="(item, i) in dataList" :key="i">
        <van-row>
          <van-col :span="12">{{ item.text }}</van-col>
          <van-col :span="12">{{ item.value }}</van-col>
        </van-row>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import Vue from 'vue'
import { Cell, CellGroup, Panel, Button, Row, Col } from 'vant'
import { getData } from '@/api/api'
Vue.use(Cell)
  .use(CellGroup)
  .use(Panel)
  .use(Button)
  .use(Row)
  .use(Col)
export default {
  name: 'queryManage',
  data: function() {
    return {
      dataList: ''
    }
  },
  created() {
    getData('mock/queryManage.json').then(res => {
      this.dataList = res.data
    })
  },
  methods: {}
}
</script>

<style scoped lang="stylus">
.content
  width 100%
  position absolute
  padding 50px 0
</style>

<template>
  <div class="content">
    <van-panel
      :title="info.company"
      v-for="(info, index) in infoList"
      :key="index"
    >
      <van-cell-group>
        <van-cell>
          <van-row>
            <van-col :span="6">联系人</van-col>
            <van-col
              :span="18"
              class="van-ellipsis"
              v-text="info.name"
            ></van-col>
          </van-row>
        </van-cell>
        <van-cell>
          <van-row>
            <van-col :span="6">性别</van-col>
            <van-col
              :span="18"
              class="van-ellipsis"
              v-text="info.sex"
            ></van-col>
          </van-row>
        </van-cell>
        <van-cell>
          <van-row>
            <van-col :span="6">个人电话</van-col>
            <van-col
              :span="18"
              class="van-ellipsis"
              v-text="info.tel"
            ></van-col>
          </van-row>
        </van-cell>
        <van-cell>
          <van-row>
            <van-col :span="6">工作电话</van-col>
            <van-col
              :span="18"
              class="van-ellipsis"
              v-text="info.workTel"
            ></van-col>
          </van-row>
        </van-cell>
        <van-cell>
          <van-row>
            <van-col :span="6">邮箱</van-col>
            <van-col
              :span="18"
              class="van-ellipsis"
              v-text="info.email"
            ></van-col>
          </van-row>
        </van-cell>
      </van-cell-group>

      <div slot="footer">
        <van-row type="flex" justify="end">
          <van-col :span="5">
            <van-button size="small">编辑</van-button>
          </van-col>
          <van-col>
            <van-button size="small" type="danger">删除</van-button>
          </van-col>
        </van-row>
      </div>
    </van-panel>
    <van-cell-group>
      <van-cell>
        <van-row type="flex" justify="center">
          <van-button type="primary" @click="goTo('/contactInfo')">
            添加联系人
          </van-button>
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
  name: 'contactInfoManage',
  data: function() {
    return {
      infoList: ''
    }
  },
  created() {
    getData('mock/contactInfoManage.json').then(res => {
      this.infoList = res.data
    })
  },
  methods: {
    goTo(url) {
      this.$router.push(url)
    }
  }
}
</script>

<style scoped lang="stylus">
.content
  width 100%
  position absolute
  padding 50px 0
  .van-cell__title
    span
      font-size 18px
      color red
      font-weight bold
  .van-row
    .van-col
      color #666
    .van-col--6
      font-size 14px
      font-weight bold
      color #000
</style>

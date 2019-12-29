<template>
  <div class="content">
    <van-panel
      :title="info.name"
      v-for="(info, index) in infoList"
      :key="index"
    >
      <van-cell-group>
        <van-cell v-for="(title, i) in titleList" :key="i">
          <van-row>
            <van-col :span="6">{{ title }}</van-col>
            <van-col
              :span="18"
              class="van-ellipsis"
              v-text="infoText[i]"
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
          <van-button type="primary" @click="goTo('/customerInfo')">
            添加客户
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
  name: 'customerInfoManage',
  data: function() {
    return {
      infoList: '',
      titleList: [
        '客户类型',
        '行业类型',
        '企业性质',
        '城市',
        '客户电话',
        '客户邮箱'
      ],
      infoText: [],
      index: ''
    }
  },
  created() {
    getData('mock/customerInfoManage.json').then(res => {
      this.infoList = res.data
    })
  },
  watch: {
    infoList() {
      for (this.index in this.infoList) {
      }
      for (let i in this.titleList) {
        switch (i) {
          case '0':
            this.infoText[i] = this.infoList[this.index].customerType
            break
          case '1':
            this.infoText[i] = this.infoList[this.index].companyType
            break
          case '2':
            this.infoText[i] = this.infoList[this.index].companyNature
            break
          case '3':
            this.infoText[i] = this.infoList[this.index].city
            break
          case '4':
            this.infoText[i] = this.infoList[this.index].tel
            break
          case '5':
            this.infoText[i] = this.infoList[this.index].email
            break
        }
      }
    }
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

<template>
  <div class="content">
    <van-cell-group title="客户信息查询">
      <van-cell v-for="(info, index) in infoList" :key="index">
        <van-field
          type="text"
          v-model="info.value"
          :placeholder="info.placeholder"
          :label="info.text"
        />
      </van-cell>
    </van-cell-group>
    <van-cell-group>
      <van-cell>
        <van-row>
          <van-col :span="8" offset="16">
            <van-button type="primary" @click="onQuery" size="small">
              查询
            </van-button>
          </van-col>
        </van-row>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import Vue from 'vue'
import { Cell, CellGroup, Panel, Button, Row, Col, Notify, Field } from 'vant'
import { getData } from '@/api/api'
Vue.use(Cell)
  .use(CellGroup)
  .use(Panel)
  .use(Button)
  .use(Row)
  .use(Col)
  .use(Notify)
  .use(Field)
export default {
  name: 'generalQuery',
  data: function() {
    return {
      infoList: [
        {
          text: '客户名称',
          value: '',
          placeholder: '请输入客户名称'
        },
        {
          text: '客户邮编',
          value: '',
          placeholder: '请输入客户邮编'
        },
        {
          text: '客户地址',
          value: '',
          placeholder: '请输入客户地址'
        },
        {
          text: '客户电话',
          value: '',
          placeholder: '请输入客户电话'
        },
        {
          text: '电子邮箱',
          value: '',
          placeholder: '请输入电子邮箱'
        },
        {
          text: '客户公司',
          value: '',
          placeholder: '请输入客户公司'
        },
        {
          text: '客户类型',
          value: '',
          placeholder: '请输入客户类型'
        }
      ]
    }
  },
  methods: {
    onQuery() {
      Notify({
        type: 'primary',
        message: '正在查询',
        duration: 1000,
        onOpened: this.goTo()
      })
    },
    goTo() {
      this.$router.push('/queryManage')
    }
  }
}
</script>

<style scoped lang="stylus">
.content
  width 100%
  position absolute
  padding 50px 0
  .van-col
    display flex
    justify-content center
    align-items center
</style>

<template>
  <div class="content">
    <van-cell-group title="联系人基本信息">
      <van-cell>
        <van-field
          type="text"
          v-model="value.company"
          label="客户单位"
          placeholder="请输入客户单位"
        />
      </van-cell>
      <van-cell>
        <van-field
          type="text"
          v-model="value.name"
          label="联系人姓名"
          placeholder="请输入联系人姓名"
        />
      </van-cell>
      <van-cell>
        <van-field
          type="text"
          v-model="value.post"
          label="联系人职位"
          placeholder="请输入联系人职位"
        />
      </van-cell>
    </van-cell-group>
    <van-cell-group title="性别">
      <van-cell>
        <van-radio-group v-model="value.sex">
          <van-row type="flex" justify="center">
            <van-col :span="4">
              <van-radio name="男">男</van-radio>
            </van-col>
            <van-col :span="4">
              <van-radio name="女">女</van-radio>
            </van-col>
          </van-row>
        </van-radio-group>
      </van-cell>
    </van-cell-group>
    <van-cell-group title="联系方式">
      <van-cell>
        <van-field
          type="tel"
          v-model="value.workTel"
          label="工作电话"
          placeholder="请输入工作电话"
        />
      </van-cell>
      <van-cell>
        <van-field
          type="tel"
          v-model="value.tel"
          label="个人电话"
          placeholder="请输入个人电话"
        />
      </van-cell>
      <van-cell>
        <van-field
          type="text"
          v-model="value.email"
          label="电子邮箱"
          placeholder="请输入电子邮箱"
        />
      </van-cell>
    </van-cell-group>
    <van-cell-group title="备注">
      <van-cell>
        <van-field
          type="textarea"
          v-model="value.remarks"
          label="备注"
          placeholder="请输入备注"
          maxlength="50"
          show-word-limit
        />
      </van-cell>
    </van-cell-group>

    <van-cell-group>
      <van-cell>
        <van-row type="flex" justify="center">
          <van-col :span="8">
            <van-button type="primary" @click="submitForm">确定</van-button>
          </van-col>
          <van-col :span="8" :offset="2">
            <van-button type="danger" @click="goTo('/contactInfoManage')"
              >取消</van-button
            >
          </van-col>
        </van-row>
      </van-cell>
    </van-cell-group>
  </div>
</template>

<script>
import Vue from 'vue'
import {
  Field,
  Cell,
  CellGroup,
  Picker,
  Popup,
  RadioGroup,
  Radio,
  Button,
  Row,
  Col,
  Toast
} from 'vant'

Vue.use(Field)
  .use(Cell)
  .use(CellGroup)
  .use(Picker)
  .use(Popup)
  .use(RadioGroup)
  .use(Radio)
  .use(Button)
  .use(Row)
  .use(Col)
  .use(Toast)
Toast.setDefaultOptions({ duration: 500 })
export default {
  name: 'contactInfo',
  data: function() {
    return {
      value: {
        company: '',
        name: '',
        post: '',
        sex: '男',
        workTel: '',
        tel: '',
        email: '',
        remarks: ''
      }
    }
  },
  methods: {
    submitForm() {
      Toast.success('提交成功')
      setTimeout(() => {
        this.goTo('/contactInfoManage')
      }, 500)
    },
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
  .van-button
    width 100%
</style>

<template>
  <div class="content">
    <van-cell-group title="客户服务基本信息">
      <van-cell>
        <van-field
          readonly
          clickable
          label="服务类型"
          :value="value.sType"
          placeholder="选择服务类型"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="sType"
            @cancel="showPicker = false"
            @confirm="onConfirm"
          />
        </van-popup>
      </van-cell>
      <van-cell>
        <van-field
          readonly
          clickable
          label="服务日期"
          :value="value.sTime"
          placeholder="选择服务日期"
          @click="showTimePicker = true"
        />
        <van-popup v-model="showTimePicker" position="bottom">
          <van-datetime-picker
            v-model="currentDate"
            type="date"
            :min-date="minDate"
            @cancel="showTimePicker = false"
            @confirm="onTimeConfrim"
          />
        </van-popup>
      </van-cell>
      <van-cell>
        <van-field
          type="text"
          v-model="value.name"
          placeholder="请输入客户名称"
          label="客户名称"
        />
      </van-cell>
      <van-cell>
        <van-field
          type="text"
          v-model="value.contacter"
          placeholder="请输入联系人名称"
          label="联系人"
        />
      </van-cell>
      <van-cell>
        <van-field
          type="number"
          v-model="value.sCost"
          placeholder="请输入服务预估成本（元）"
          label="服务成本"
        />
      </van-cell>
      <van-cell>
        <van-field
          type="number"
          v-model="value.sTimeCost"
          placeholder="请输入服务预估时间成本（小时）"
          label="时间成本"
        />
      </van-cell>
      <van-cell>
        <van-field
          type="textarea"
          v-model="value.sDetails"
          placeholder="请输入服务描述"
          label="服务描述"
          maxlength="50"
          show-word-limit
        />
      </van-cell>
    </van-cell-group>
    <van-cell-group title="客户反馈">
      <van-cell title="客户满意度">
        <van-rate v-model="value.satisfaction" />
      </van-cell>
      <van-cell>
        <van-field
          type="textarea"
          v-model="value.feedback"
          placeholder="请输入客户反馈意见"
          label="客户反馈"
          maxlength="50"
          show-word-limit
        />
      </van-cell>
    </van-cell-group>
    <van-cell-group title="描述">
      <van-cell>
        <van-field
          type="textarea"
          v-model="value.detailDescription"
          placeholder="请输入详细描述"
          label="详细描述"
          maxlength="100"
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
            <van-button type="danger" @click="goTo('/servicesManage')"
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
  Switch,
  Picker,
  Popup,
  RadioGroup,
  Radio,
  Button,
  Row,
  Col,
  Toast,
  DatetimePicker,
  Rate
} from 'vant'

Vue.use(Field)
  .use(Cell)
  .use(CellGroup)
  .use(Switch)
  .use(Picker)
  .use(Popup)
  .use(RadioGroup)
  .use(Radio)
  .use(Button)
  .use(Row)
  .use(Col)
  .use(Toast)
  .use(DatetimePicker)
  .use(Rate)
Toast.setDefaultOptions({ duration: 500 })
export default {
  name: 'servicesInfoAdd',
  data: function() {
    return {
      value: {
        sType: '',
        sTime: '',
        name: '',
        contacter: '',
        sCost: '',
        sTimeCost: '',
        sDetails: '',
        satisfaction: 5,
        feedback: '',
        detailDescription: ''
      },
      sType: ['上门服务', '线上解答'],
      showPicker: false,
      showTimePicker: false,
      currentDate: new Date(),
      minDate: new Date()
    }
  },
  methods: {
    onConfirm(value) {
      this.value.sType = value
      this.showPicker = false
    },
    onTimeConfrim(value) {
      this.value.sTime = value.toLocaleDateString() //转换成字符串显示，格式为 yyyy/mm/dd
      this.showTimePicker = false
    },
    submitForm() {
      Toast.success('提交成功')
      setTimeout(() => {
        this.goTo('/servicesManage')
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

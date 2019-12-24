<template>
  <div class="content">
    <van-cell-group title="账号信息">
      <van-cell>
        <van-field
          v-model="value.seller"
          label="销售员"
          placeholder="默认为系统登陆账户"
          readonly
        />
      </van-cell>
      <van-cell title="是否为共享用户">
        <van-switch
          v-model="value.checked"
          active-color="#07c160"
          inactive-color="#ee0a24"
          size="20px"
        />
      </van-cell>
    </van-cell-group>
    <van-cell-group title="基本信息">
      <van-cell>
        <van-field
          v-model="value.name"
          label="客户名称"
          placeholder="请输入客户名称"
        />
      </van-cell>
      <van-cell>
        <van-field
          v-model="value.code"
          label="客户编码"
          placeholder="请输入客户编码"
        />
      </van-cell>
      <van-cell>
        <van-field
          v-model="value.nickname"
          label="客户简称"
          placeholder="请输入客户简称"
        />
      </van-cell>
      <van-cell>
        <van-field v-model="value.tel" label="电话" placeholder="请输入电话" />
      </van-cell>
      <van-cell>
        <van-field v-model="value.fax" label="传真" placeholder="请输入传真" />
      </van-cell>
      <van-cell>
        <van-field
          v-model="value.website"
          label="网址"
          placeholder="请输入网址"
        />
      </van-cell>
      <van-cell>
        <van-field
          v-model="value.email"
          label="电子邮件"
          placeholder="请输入电子邮件"
        />
      </van-cell>
      <van-cell>
        <van-field
          v-model="value.pcode"
          label="邮政编码"
          placeholder="请输入邮政编码"
        />
      </van-cell>
      <van-cell>
        <van-field
          readonly
          clickable
          label="城市"
          :value="value.city"
          placeholder="选择城市"
          @click="showPicker = true"
        />

        <van-popup v-model="showPicker" position="bottom">
          <van-picker
            show-toolbar
            :columns="ctiyList"
            @cancel="showPicker = false"
            @confirm="onConfirm"
          />
        </van-popup>
      </van-cell>
      <van-cell>
        <van-field
          v-model="value.address"
          rows="2"
          autosize
          label="详细地址"
          type="textarea"
          placeholder="请输入详细地址"
          show-word-limit
          maxlength="50"
        />
      </van-cell>
    </van-cell-group>
    <van-cell-group title="客户性质">
      <van-cell title="客户来源" center>
        <van-radio-group v-model="value.customerSrc">
          <van-radio name="互联网">互联网</van-radio>
          <van-radio name="报纸">报纸</van-radio>
          <van-radio name="电视">电视</van-radio>
        </van-radio-group>
      </van-cell>
      <van-cell title="客户类型" center>
        <van-radio-group v-model="value.customerType">
          <van-radio name="潜在用户">潜在用户</van-radio>
          <van-radio name="非潜在用户">非潜在用户</van-radio>
        </van-radio-group>
      </van-cell>
      <van-cell title="销售方式" center>
        <van-radio-group v-model="value.sellType">
          <van-radio name="零售">零售</van-radio>
          <van-radio name="批发">批发</van-radio>
          <van-radio name="代理商">代理商</van-radio>
        </van-radio-group>
      </van-cell>
    </van-cell-group>
    <van-cell-group title="企业概况">
      <van-cell title="行业类型" center>
        <van-radio-group v-model="value.companyType">
          <van-radio name="IT互联网">IT互联网</van-radio>
          <van-radio name="建筑行业">建筑行业</van-radio>
          <van-radio name="其他的">其他的</van-radio>
        </van-radio-group>
      </van-cell>
      <van-cell title="企业性质" center>
        <van-radio-group v-model="value.companyNature">
          <van-radio name="国有企业">国有企业</van-radio>
          <van-radio name="民营企业">民营企业</van-radio>
        </van-radio-group>
      </van-cell>
      <van-cell>
        <van-field
          label="企业描述"
          type="textarea"
          v-model="value.sketch"
          show-word-limit
          maxlength="50"
          placeholder="请输入企业描述"
        />
      </van-cell>
    </van-cell-group>
    <van-cell-group title="备注">
      <van-cell>
        <van-field
          type="textarea"
          v-model="value.remark"
          placeholder="请输入备注"
          show-word-limit
          maxlength="50"
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
            <van-button type="danger">取消</van-button>
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
  Toast
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
export default {
  name: 'customerInfo',
  data: function() {
    return {
      value: {
        seller: '系统登陆账户',
        checked: true,
        name: '',
        code: '',
        nickname: '',
        tel: '',
        fax: '',
        website: '',
        email: '',
        pcode: '',
        city: '',
        address: '',
        customerSrc: '互联网',
        customerType: '潜在用户',
        sellType: '零售',
        companyType: 'IT互联网',
        companyNature: '国有企业',
        sketch: '',
        remark: ''
      },
      showPicker: false,
      ctiyList: [
        '北京市',
        '天津市',
        '河北省',
        '山西省',
        '内蒙古自治区',
        '辽宁省',
        '吉林省',
        '黑龙江省',
        '上海市',
        '江苏省',
        '浙江省',
        '安徽省',
        '福建省',
        '江西省',
        '山东省',
        '河南省',
        '湖北省',
        '湖南省',
        '广东省',
        '广西壮族自治区',
        '海南省',
        '重庆市',
        '四川省',
        '贵州省',
        '云南省',
        '西藏自治区',
        '陕西省',
        '甘肃省',
        '青海省',
        '宁夏回族自治区',
        '新疆维吾尔自治区',
        '台湾省',
        '香港特别行政区',
        '澳门特别行政区',
        '海外'
      ]
    }
  },
  methods: {
    onConfirm(value) {
      this.value.city = value
      this.showPicker = false
    },
    submitForm() {
      Toast.success('提交成功')
      setTimeout(() => {
        console.log(this.value)
      }, 100)
      // this.$router.go(0)
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

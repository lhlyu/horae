<template>
  <a-card size="small" title="安全设置" :bordered="false" :loading="loading">
    <a-list item-layout="horizontal" :data-source="data">
      <a-list-item slot="renderItem" slot-scope="item">
        <a slot="actions" @click="showVisible">修改</a>
        <a-list-item-meta :description="item.desc">
          <h3 slot="title">{{item.title}}</h3>
        </a-list-item-meta>
      </a-list-item>
    </a-list>
    <a-modal v-model="visible" title="修改密码" @ok="handleOk">
      <a-form layout="horizontal" labelAlign="left" :labelCol="{ span: 4 }" :wrapperCol="{ span: 20 }">
        <a-form-item label="原始密码">
          <a-input type="password" placeholder="原始密码" allowClear v-model="req.oldPwd" />
        </a-form-item>
        <a-form-item label="新的密码">
          <a-input type="password" placeholder="新的密码" allowClear v-model="req.newPwd" />
        </a-form-item>
        <a-form-item label="确认密码">
          <a-input type="password" placeholder="确认密码" allowClear v-model="req.rePwd" />
        </a-form-item>
      </a-form>
    </a-modal>
  </a-card>
</template>

<script>
export default {
  name: 'security_page',
  data () {
    return {
      loading: false,
      visible: false,
      data: [{
        title: '修改密码',
        desc: 'account password'
      }],
      req: {
        oldPwd: '',
        newPwd: '',
        rePwd: ''
      }
    }
  },
  methods: {
    showVisible () {
      this.req = {
        oldPwd: '',
        newPwd: '',
        rePwd: ''
      }
      this.visible = true
    },
    handleOk () {
      this.$message.success('修改成功')
    }
  }
}
</script>

<template>
  <a-card size="small" title="全局设置" :bordered="false" :loading="loading">
    <a-form layout="horizontal" labelAlign="left" :labelCol="{ span: 2 }" :wrapperCol="{ span: 22 }">
      <a-form-item label="菜单状态">
        <a-switch checked-children="锁定" un-checked-children="解锁" v-model="data.lockMenu" @change="handlerSwitch"/>
      </a-form-item>
      <a-form-item label="分页条数">
        <a-input-number id="inputNumber" v-model="data.pageSize" :min="1" :max="50" />
      </a-form-item>
      <a-form-item>
        <a-button type="primary" @click="handlerUpdate">
          修改
        </a-button>
      </a-form-item>
    </a-form>
  </a-card>
</template>

<script>
export default {
  name: 'global_page',
  props: {
    data: {
      type: Object,
      default () {
        return {
          lockMenu: true,
          pageSize: 6
        }
      }
    }
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {
    handlerUpdate () {
    },
    handlerSwitch (c) {
      console.log(this.data)
    }
  }
}
</script>

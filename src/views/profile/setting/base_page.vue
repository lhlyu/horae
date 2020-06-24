<template>
  <a-card size="small" title="基本信息" :bordered="false" :loading="loading">
    <a-form layout="horizontal" labelAlign="left" :labelCol="{ span: 2 }" :wrapperCol="{ span: 22 }">
      <a-form-item label="昵称">
        <a-input placeholder="昵称" allowClear v-model="data.nickName" />
      </a-form-item>
      <a-form-item label="Bio">
        <a-textarea placeholder="Bio" allowClear v-model="data.bio" />
      </a-form-item>
      <a-form-item label="URL">
        <a-input placeholder="个人网站" type="url" allowClear v-model="data.url" />
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
  name: 'base_page',
  props: {
    data: {
      type: Object,
      default () {
        return {
          nickName: '鱼酱',
          bio: '起风了，唯有努力生存',
          url: 'https://github.com/lhlyu/horae'
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
    }
  }
}
</script>

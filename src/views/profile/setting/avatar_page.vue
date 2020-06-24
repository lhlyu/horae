<template>
  <a-card size="small" title="头像信息" :bordered="false" :loading="loading">
    <a-upload
      name="avatar"
      list-type="picture-card"
      class="avatar-uploader"
      :show-upload-list="false"
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      :before-upload="beforeUpload"
      @change="handleChange"
    >
      <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
      <div v-else>
        <a-icon :type="loading ? 'loading' : 'plus'" />
        <div class="ant-upload-text">
          Upload
        </div>
      </div>
    </a-upload>
    <a-button type="primary" @click="handlerUpdate">
      修改
    </a-button>
  </a-card>
</template>

<script>
export default {
  name: 'avatar_page',
  data () {
    return {
      loading: false,
      imageUrl: ''
    }
  },
  methods: {
    handleChange (info) {
      if (info.file.status === 'uploading') {
        this.loading = true
        return
      }
      if (info.file.status === 'done') {
      }
    },
    beforeUpload (file) {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png'
      if (!isJpgOrPng) {
        this.$message.error('You can only upload JPG file!')
      }
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isLt2M) {
        this.$message.error('Image must smaller than 2MB!')
      }
      return isJpgOrPng && isLt2M
    },
    handlerUpdate () {
    }
  }
}
</script>

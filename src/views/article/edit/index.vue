<template>
  <a-card>
    <a-tabs default-active-key="2" tabPosition="left">
      <a-tab-pane key="1" tab="基本信息">
      </a-tab-pane>
      <a-tab-pane key="2" tab="文章内容">
        <AddPage></AddPage>
      </a-tab-pane>
    </a-tabs>
  </a-card>
</template>

<script>
import AddPage from './add_page'

export default {
  name: 'index',
  components: {
    AddPage
  },
  data () {
    return {
      loading: false
    }
  },
  methods: {

  }
}
</script>

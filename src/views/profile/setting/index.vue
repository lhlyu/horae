<template>
  <a-card>
    <a-tabs default-active-key="1" tab-position="left">
      <a-tab-pane key="1" tab="基本">
        <BasePage></BasePage>
      </a-tab-pane>
      <a-tab-pane key="2" tab="头像">
        <AvatarPage></AvatarPage>
      </a-tab-pane>
      <a-tab-pane key="3" tab="全局">
        <GlobalPage></GlobalPage>
      </a-tab-pane>
      <a-tab-pane key="4" tab="安全">
        <SecurityPage></SecurityPage>
      </a-tab-pane>
    </a-tabs>
  </a-card>
</template>

<script>

import BasePage from './base_page'
import AvatarPage from './avatar_page'
import GlobalPage from './global_page'
import SecurityPage from './security_page'

export default {
  name: 'index',
  components: {
    BasePage,
    AvatarPage,
    GlobalPage,
    SecurityPage
  },
  data () {
    return {}
  },
  methods: {}
}
</script>

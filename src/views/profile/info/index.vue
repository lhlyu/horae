<template>
  <a-row :gutter="16">
    <a-col :span="12">
      <a-card>
        <a-descriptions title="基本信息">
          <a-descriptions-item label="头像">
            <a-avatar :size="56" icon="user" />
          </a-descriptions-item>
          <a-descriptions-item label="ID">
            10086
          </a-descriptions-item>
          <a-descriptions-item label="账号">
            lhlyu
          </a-descriptions-item>
          <a-descriptions-item label="昵称">
            鱼酱
          </a-descriptions-item>
          <a-descriptions-item label="Bio">
            起风了，唯有努力生存！
          </a-descriptions-item>
        </a-descriptions>
      </a-card>
    </a-col>
    <a-col :span="12">
      <a-card>
        <a-tabs default-active-key="1" tabPosition="left">
          <a-tab-pane key="1" tab="最近登陆">
            <a-timeline>
              <a-timeline-item>2020-06-22 15:03:56</a-timeline-item>
              <a-timeline-item>2020-06-21 12:13:12</a-timeline-item>
              <a-timeline-item>2020-06-20 22:25:00</a-timeline-item>
              <a-timeline-item>2020-06-19 16:45:03</a-timeline-item>
            </a-timeline>
          </a-tab-pane>
        </a-tabs>
      </a-card>
    </a-col>
  </a-row>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {}
  },
  methods: {}
}
</script>

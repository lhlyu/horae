<template>
  <a-card :loading="loading" title="Card title">
    whatever content
  </a-card>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      loading: false
    }
  },
  methods: {}
}
</script>

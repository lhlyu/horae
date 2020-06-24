<template>
  <div class="u-layout u-transition">
    <div class="u-aside u-transition" ref="aside">
      <div @mouseenter="changeWidth(true)" style="width:4px;position:absolute;left:0;top:21px;bottom:128px;z-index:9999;"></div>
      <ASide></ASide>
    </div>
    <div class="u-main u-transition"  @mouseenter="changeWidth(false)">
      <Header></Header>
      <main>
        <router-view/>
      </main>
    </div>
  </div>
</template>

<script>

import ASide from './components/ASide'
import Header from './components/Header'

import { mapGetters } from 'vuex'

export default {
  name: 'index',
  components: {
    ASide,
    Header
  },
  data () {
    return {
      flag: true
    }
  },
  methods: {
    changeWidth (flag) {
      if (this.getOptions.lockMenu) {
        return
      }
      if (!flag) {
        this.$refs.aside.style.width = '0px'
      } else {
        this.$refs.aside.style.width = '275px'
      }
    }
  },
  computed: {
    ...mapGetters(['getOptions'])
  }
}
</script>
<style lang="scss">
  .u-layout{
    min-height: 100vh;
    display: flex;
    .u-aside{
      width: 275px;
      overflow: hidden;
      box-shadow: 2px 0 6px rgba(0,21,41,.35);
    }
    .u-main{
      flex: 1;
      background: #f0f2f5;
      main{
        padding: 20px;
      }
    }
  }
</style>

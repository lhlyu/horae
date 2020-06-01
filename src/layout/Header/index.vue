<template>
    <div class="u-header">
        <div class="u-header__left">
            <i class="el-icon-s-fold u-transition" :class="fold ? 'u-rotate-180':''"  @click="triggerFold"></i>
        </div>
        <div class="u-header__right">

        </div>
    </div>
</template>

<script>

  import {mapState,mapMutations} from "vuex"

  export default {
    name: "index",
    methods:{
      ...mapMutations({
        triggerFold(commit) {
          commit("SET_FOLDER", !this.fold)
        }
      }),
    },
    computed:{
      ...mapState({
        fold: state => state.layout.fold
      })
    }
  }
</script>

<style>

</style>

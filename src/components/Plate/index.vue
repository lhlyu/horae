<template>
    <div class="u-plate">
        <div class="u-plate__left">
          this is test text
        </div>
        <div class="u-plate__center">
          <ul>
            <li><span>Like</span></li>
            <li><span>UnLike</span></li>
            <li><span>Reply</span></li>
          </ul>
        </div>
        <div class="u-plate__right">

        </div>
    </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {}
        },
        methods: {}
    }
</script>

<style lang="scss">
  .u-plate{
    position: relative;
    height: 100px;
    width: 70%;
    margin-top: 50px;
    display: flex;
    &__left{
      background: rgba(#ffffff,0.6);
      width:400px;
      height:100px;
      position: relative;
      padding: 20px;
      &:after{
        content: '';
        position: absolute;
        right: -120px;
        top: 0;
        border-left: 60px solid rgba(#ffffff, 0.6);
        border-right: 60px solid transparent;
        border-bottom: 70px solid transparent;
        border-top: 70px solid rgba(#ffffff, 0.6);
      }
    }
    &__center{
      background: transparent;
      width: 120px;
      height: 165px;
      -webkit-transform: skew(-39deg);
      transform: skew(-40deg);
      margin-left: 67px;
      margin-top: -10px;
      ul{
        list-style-type: none;
        li{
          line-height: 50px;
          text-align: center;
          &:nth-child(1){
            background: rgba(#ff0000, 0.6);
            width: 120px;
            height: 50px;
            transform: skew(0deg);
          }
          &:nth-child(2){
            background: rgba(#ff00ff, 0.6);
            width: 120px;
            height: 50px;
            transform: skew(0deg);
            margin-top: 7px;
          }
          &:nth-child(3){
            background: rgba(#0000ff, 0.6);
            width: 120px;
            height: 50px;
            margin-top: 7px;
            transform: skew(0deg);
          }
          span{
            letter-spacing: 4px;
          }
        }
      }
    }
  }
</style>

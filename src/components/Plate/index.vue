<template>
    <div class="u-plate">
        <div class="u-plate__left">
          this is test text
        </div>
        <div class="u-plate__center">
<!--          <ul>-->
<!--            <li><span>Like</span></li>-->
<!--            <li><span>UnLike</span></li>-->
<!--            <li><span>Reply</span></li>-->
<!--          </ul>-->
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
    height: 130px;
    width: 800px;
    margin-top: 50px;
    display: flex;
    &__left{
      background: rgba(#ffffff,0.6);
      height: 100%;
      width: 550px;
      padding: 20px;
      border-radius: 2px;
      font-weight: bold;
      letter-spacing: 3px;
      clip-path: polygon(
          0 0,
          100% 0,
          80% 100%,
          0 100%
      );
    }
    &__center{
      width: 260px;
      height: 114%;
      background: rgba(#fff000,0.6);
      margin-left: -110px;
      margin-top: -10px;

      clip-path: polygon(
          20% 0,
          100% 0,
          80% 100%,
          0 100%
      );

      /*ul{*/
      /*  height: 100%;*/
      /*  list-style-type: none;*/
      /*  li{*/
      /*    height: 35%;*/
      /*    text-align: center;*/
      /*    clip-path: polygon(*/
      /*        20% 0,*/
      /*        100% 0,*/
      /*        80% 100%,*/
      /*        0 100%*/
      /*    );*/

      /*    &:nth-child(1){*/
      /*      background: rgba(#ff0000, 0.6);*/
      /*    }*/
      /*    &:nth-child(2){*/
      /*      background: rgba(#ff00ff, 0.6);*/
      /*    }*/
      /*    &:nth-child(3){*/
      /*      background: rgba(#0000ff, 0.6);*/
      /*    }*/
      /*  }*/
      /*}*/
    }
  }
</style>

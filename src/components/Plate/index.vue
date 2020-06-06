<template>
    <div class="u-plate">
        <div class="u-plate__left">
          莫听穿林打叶声，何妨吟啸且徐行。竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。
          料峭春风吹酒醒，微冷，山头斜照却相迎。回首向来萧瑟处，归去，也无风雨也无晴。
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
    max-width: 1100px;
    width: 100%;
    margin: 0 auto;
    margin-top: 50px;
    display: flex;
    &__left{
      flex: 5;
      background: rgba(#ffffff,0.6);
      height: 100%;
      padding: 20px;
      border-radius: 2px;
      font-weight: bold;
      letter-spacing: 3px;
      shape-margin: 20px;
      overflow: hidden;
      clip-path: polygon(
          0 0,
          100% 0,
          calc(100% -  100px) 100%,
          0 100%
      );
    }
    &__center{
      width: 200px;
      background: rgba(#fff000,0.6);
      transform: scale(1.1);
      margin: 0 -90px;
      clip-path: polygon(
          100px 0,
          100% 0,
          calc(100% - 100px) 100%,
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
    &__right{
      background: rgba(#ffffff,0.6);
      height: 100%;
      flex: 1;
      min-width: 110px;
      padding: 20px;
      border-radius: 2px;
      font-weight: bold;
      letter-spacing: 3px;
      clip-path: polygon(
          100px 0,
          100% 0,
          100% 100%,
          0 100%
      );
    }
  }
</style>

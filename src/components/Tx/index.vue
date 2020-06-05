<template>
  <div class="u-tx">
    莫听穿林打叶声，何妨吟啸且徐行。竹杖芒鞋轻胜马，谁怕？一蓑烟雨任平生。
    料峭春风吹酒醒，微冷，山头斜照却相迎。回首向来萧瑟处，归去，也无风雨也无晴。
  </div>
</template>

<script>
  export default {
    name: 'index'
  }
</script>

<style lang="scss">
  .u-tx{
    background: rebeccapurple;
    height: 100%;
    width: 100%;
    padding: 20px;
    border-radius: 4px;
    color: #ffffff;
    font-weight: bold;
    letter-spacing: 3px;
    clip-path: polygon(
      0 0,
      100% 0,
      70% 100%,
      0 100%
    );
  }

</style>

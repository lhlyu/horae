<template>
  <div>
    <transition name="fade">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </transition>
  </div>
</template>

<script>
    export default {
        name: "blank"
    }
</script>

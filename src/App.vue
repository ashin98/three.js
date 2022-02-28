<template>
  <suspense>
    <template #default>
      <div id="app">
        <router-view></router-view>
      </div>
    </template>
  </suspense>
</template>

<script setup>
import Home from "./views/Home/index.vue";
</script>

<style>
#app {
  height: 100%;
}
</style>

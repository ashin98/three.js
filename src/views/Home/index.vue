<template>
  <Header></Header>
  <div class="homepage">
    <Swiper :banner="data.banner"></Swiper>
  </div>
  <Live></Live>
</template>

<script setup>
import Swiper from "../../components/swiper.vue";
import Live from "../live/index.vue";
import { reactive, onMounted, defineAsyncComponent } from "vue";
import { getHomepage } from "../../api/home";
const Header = defineAsyncComponent(() => import("../header/index.vue")); //异步组件
let res = await getHomepage();
console.log(res);

const data = reactive({
  banner: res.banner,
});
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.homepage {
  margin-top: 100px;
  height: 575px;
  position: relative;
}
</style>

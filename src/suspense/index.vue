<template>
  <suspense>
    <template #fallback>
      <div class="loading">
        <Loading></Loading>
      </div>
    </template>
    <template #default>
      <div>
        <HomePage></HomePage>
      </div>
    </template>
  </suspense>
</template>

<script setup>
//defineAsyncComponent定义异步组件；使用 <Suspense></Suspense> 包裹所有异步组件相关代码
//<Suspense></Suspense> 下 <template #default></template> 插槽包裹异步组件
//<Suspense></Suspense> 下 <template #fallback></template> 插槽包裹渲染异步组件之前的内容
import { defineAsyncComponent } from "vue";
import Loading from "../components/loading.vue";
const HomePage = defineAsyncComponent(() =>
  import("../views/header/index.vue")
);
import { getHomepage } from "../api/home";
let res = await getHomepage();
</script>

<style></style>

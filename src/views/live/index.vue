<template>
  <div class="live">
    <h1>乐享生活100+</h1>
    <div class="live_list">
      <div class="live_item" v-for="(item, index) in res" :key="index">
        <div class="live_btn">
          <img :src="item.menuThumbnail" alt="" />
          <h3>{{ item.displayName }}</h3>
        </div>
      </div>
    </div>
    <a-button type="primary" size="large" @click="router.push('/product')"
      >立即享受生活</a-button
    >
  </div>
</template>

<script setup>
import { computed, reactive } from "vue";
import { getHomepage } from "../../api/home";
import { useRouter } from "vue-router";
const router = useRouter();
console.log(router);
const data = await getHomepage();
const res = data.sports.splice(0, 10);
</script>

<style lang="less" scoped>
.live {
  margin-top: 100px;
  display: flex;
  margin: 40 auto;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 40px;
  h1 {
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 50px;
  }
  .live_list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    .live_item {
      width: 19%;

      .live_btn {
        display: flex;
        height: 73px;
        width: 200px;
        background-color: #fff;
        border-radius: 8px 8px 25px 8px;
        margin-bottom: 30px;
        box-shadow: 5px 5px 5px #ccc;
        align-items: center;
        justify-content: center;
        position: relative;
        img {
          position: absolute;
          width: 80px;
          height: 80px;
          left: -15px;
          top: -15px;
        }
        h3 {
          font-weight: 900;
          font-size: 20px;
        }
      }
    }
  }
}
</style>

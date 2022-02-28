<template>
  <div id="header">
    <div class="logo">
      <img src="../../assets/images/logo.jpg" alt="" />
    </div>
    <div class="search">
      <a-input-search
        v-model:value="data.search"
        placeholder="搜索商品或商品号"
        enter-button="搜索"
        size="large"
        length="400"
        autosize="{minRows: 2, maxRows: 6}"
        @search="onSearch"
      />
    </div>
    <div class="menu">
      <a-menu mode="horizontal">
        <a-menu-item key="help">
          <template #icon>
            <question-circle-outlined />
          </template>
          帮助
        </a-menu-item>
        <a-menu-item key="store">
          <template #icon>
            <bank-outlined />
          </template>
          门店
        </a-menu-item>
        <a-menu-item key="account">
          <template #icon>
            <pay-circle-outlined />
          </template>
          账户
        </a-menu-item>
        <a-menu-item key="cart">
          <template #icon>
            <shopping-cart-outlined />
          </template>
          购物车
        </a-menu-item>
      </a-menu>
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import {
  QuestionCircleOutlined,
  BankOutlined,
  PayCircleOutlined,
  ShoppingCartOutlined,
  AlignCenterOutlined,
} from "@ant-design/icons-vue";
const data = reactive({
  search: "",
});
function onSearch() {}
</script>

<style lang="less">
#header {
  display: flex;
  position: fixed;
  background-color: #fff;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  font-size: 20px;
  width: 100%;
  box-shadow: 0 0 10px #ccc;
  z-index: 999;
  .logo {
    width: 100px;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .search {
    // width: 500px;
    // height: 60px;
    .ant-input {
      width: 400px;
      height: 50px;
    }
    .ant-input-search-button {
      height: 50px;
      span {
        font-size: 14px;
      }
    }
  }
  .menu {
    margin-right: 50px;
    width: 500px;
    .ant-menu-title-content {
      font-size: 18px;
    }
    .ant-menu-item-icon {
      font-size: 18px;
    }
  }
}
</style>

<template>
  <div class="container my-5">
    <div class="row justify-content-center align-items-center">
      <template v-for="item in products" :key="item.id">
        <div class="col">
          <div class="mx-3">
            <h2 class="display-1">{{ item.title }}</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-4">
            <div class="d-flex h-100 flex-column justify-content-between p-3">
              <p>產品分類：{{ item.category }}</p>
              <p>產品說明：{{ item.content }}</p>
              <p>產品描述：{{ item.description }}</p>
              <p>產品ID：{{ item.id }}</p>
              <p>原價：{{ item.origin_price }}</p>
              <p>特價：{{ item.price }}</p>
              <p>剩餘數量：{{ item.num }} {{ item.unit }}</p>
            </div>
          </div>
          <div class="col-8">
            <div class="row border p-3">
              <div class="col-10">
                <img class="img-fluid" :src="item.imageUrl" alt="" />
              </div>
              <div class="col-2">
                <div class="d-flex h-100 flex-column justify-content-between">
                  <template v-for="(pic, idx) in item.imagesUrl" :key="idx">
                    <img class="img-fluid m-2" :src="pic" alt="" />
                  </template>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { getProducts } from "../api/axios";
import axios from "axios";
const url = "https://vue3-course-api.hexschool.io/v2"; // 請加入站點
const path = "ashen"; // 請加入個人 API path

export default {
  data() {
    return {
      products: [],
    };
  },
  methods: {
    async getItems() {
      const data = await getProducts(url, path);
      console.log(data);
      this.products = data;
    },
  },
  mounted() {
    // 取出 Token
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    // 設定 axios 在 headers 中夾帶 token
    axios.defaults.headers.common["Authorization"] = token;

    this.getItems();
  },
};
</script>
<style lang=""></style>

<template>
  <div class="container">
    <div class="row justify-content-center align-items-center">
      <template v-for="item in products" :key="item.id">
        <h2>{{ item.title }}</h2>
        <div class="col-4">
          <p>產品分類：{{ item.category }}</p>
          <p>產品說明：{{ item.content }}</p>
          <p>產品描述：{{ item.description }}</p>
          <p>產品ID：{{ item.id }}</p>
          <p>原價：{{ item.origin_price }}</p>
          <p>特價：{{ item.price }}</p>
          <p>剩餘數量：{{ item.num }} {{ item.unit }}</p>
        </div>
        <div class="col-6">
          <img class="img-fluid" :src="item.imageUrl" alt="" />
          <template v-for="(pic, idx) in item.imagesUrl" :key="idx">
            <img class="img-fluid w-25" :src="pic" alt="" />
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
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
    getProducts() {
      // #5 取得後台產品列表
      axios
        .get(`${url}/api/${path}/admin/products`)
        .then((res) => {
          console.log(res.data);
          this.products = res.data.products;
        })
        .catch((err) => {
          console.log(err.response.data.message);
        });
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

    this.getProducts();
  },
};
</script>
<style lang=""></style>

<template>
  <div class="container">
    <div class="btn btn-primary"></div>
  </div>
</template>
<script>
import axios from "axios";
const url = "https://vue3-course-api.hexschool.io/v2"; // 請加入站點
const path = "ashen"; // 請加入個人 API path

export default {
  methods: {
    getProducts() {
      // #5 取得後台產品列表
      axios
        .get(`${url}/api/${path}/admin/products`)
        .then((res) => {
          console.log(res.data);
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

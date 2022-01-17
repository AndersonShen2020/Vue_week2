<template>
  <div class="container">
    <div class="row justify-content-center loginform">
      <div class="col-8">
        <div
          class="d-flex h-100 flex-column justify-content-center align-items-center"
        >
          <h1 class="h3 mb-3 font-weight-normal mt-auto">請先登入</h1>
          <form class="form-signin">
            <div class="form-floating mb-3">
              <input
                type="email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                required
                v-model="user.username"
                autofocus
              />
              <label for="floatingInput">Email address</label>
            </div>
            <div class="form-floating">
              <input
                type="password"
                class="form-control"
                id="floatingPassword"
                placeholder="Password"
                v-model="user.password"
                required
              />
              <label for="floatingPassword">Password</label>
            </div>
            <button
              class="btn btn-lg btn-primary w-100 mt-3"
              type="submit"
              @click.prevent="login"
            >
              登入
            </button>
          </form>
          <p class="mt-5 mb-3 text-muted">&copy; 2021~∞ - 六角學院</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../router";
import axios from "axios";
const url = "https://vue3-course-api.hexschool.io/v2"; // 請加入站點
// const path = "ashen"; // 請加入個人 API path

export default {
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    login() {
      axios
        .post(`${url}/admin/signin`, this.user)
        .then((res) => {
          console.log(res);
          // expired = unix timestamp
          const { token, expired } = res.data;
          document.cookie = `hexToken=${token}; expires=${new Date(expired)};`;
        })
        .catch((err) => {
          console.log(err.response.data.error.message);
        });
      router.push("/products");
    },
  },
};
</script>

<style lang="scss" scoped>
.form-signin {
  width: 100%;
  max-width: 330px;
  padding: 15px;
  margin-bottom: auto;
}

.loginform {
  min-height: calc(100vh - (34px + 24px));
}
</style>

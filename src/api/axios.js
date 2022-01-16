import axios from "axios";

// #5 取得後台產品列表
// export async function getProducts(url, path) {
//   await axios
//     .get(`${url}/api/${path}/admin/products`)
//     .then((res) => {
//       console.log(res.data.products);
//       // this.products = res.data.products;
//       return res.data.products;
//     })
//     .catch((err) => {
//       console.log(err.response.data.message);
//     });
// }

export async function getProducts(url, path) {
  try {
    const { data } = await axios.get(`${url}/api/${path}/admin/products`);
    return data.products;
  } catch (err) {
    console.log(err.response.data.message);
  }
}

<template>
  <div class="home">
    <Header placeHolder="Find what you want..." />
    <Banner />
    <ScrollMenu />
    <h2>Top products</h2>
    <Products />
  </div>
</template>


<script>
import Banner from "@/components/Banner.vue";
import ScrollMenu from "@/components/ScrollMenu.vue";
import Products from "@/components/Products.vue";
import Header from "@/components/Header.vue";

export default {
  name: "Home",
  components: {
    Banner,
    ScrollMenu,
    Products,
    Header,
  },
};
</script>


<style lang="less">
h2 {
  font-weight: 400;
  margin-top: 15px;
}
.home {
  margin: 20px;
}
</style>

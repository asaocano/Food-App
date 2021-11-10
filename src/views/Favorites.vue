<template>
  <div>
    <h2>Your favorites</h2>
    <div class="favorites">
      <div class="favorite" v-for="(item, index) in favorites" :key="index">
        <div class="img">
          <img :src="'/assets/' + item.img" alt="" />
        </div>
        <div class="info">
          <h3 class="title">{{ item.nombre }}</h3>
          <button>View store</button>
          <p class="times">Ordered {{ item.ordenes }} times</p>
        </div>
        <div class="rant"><i class="fas fa-star"></i>{{ item.calif }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      favorites: [
        { nombre: "McDonald's", ordenes: "5", calif: "4.2", img: "mc.jpg" },
        { nombre: "Caffenio", ordenes: "4", calif: "4.8", img: "caffenio.png" },
        { nombre: "KFC", ordenes: "2", calif: "4.4", img: "kfc.jpeg" },
      ],
    };
  },
};
</script>

<style lang="less">
h2 {
  font-weight: 400;
  margin: 20px 0;
}
.favorite {
  display: flex;
  justify-content: space-between;
  margin: 20px;
  padding: 15px;
  border-bottom: 1px solid #000;
  .img img {
    height: 80px;
    width: 150px;
    border-radius: 20px 20px 20px 20px;
    -moz-border-radius: 20px 20px 20px 20px;
    -webkit-border-radius: 20px 20px 20px 20px;
    border: 0px solid #000000;
  }
  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  button {
    margin-top: 10px;
    border-radius: 20px;
  }
  .rant {
    display: flex;
    align-items: center;
    font-size: 12px;
    background-color: rgba(163, 163, 163);
    color: #fff;
    padding: 5px;
    border-radius: 50%;
    height: 20px;

    i {
      color: rgba(255, 131, 62);
    }
  }
}
</style>
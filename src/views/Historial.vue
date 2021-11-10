<template>
  <div>
    <h2>Your past orders</h2>
    <div class="orders">
      <div class="order" v-for="(item, index) in history" :key="index">
        <div class="details">
          <div class="img">
            <img :src="'/assets/' + item.logo" alt="" />
          </div>
          <div class="info">
            <h4>{{ item.name }}</h4>
            <p class="date">{{ item.date }}</p>
          </div>
        </div>
        <div class="buttons">
          <a href="#" class="detalles">Details</a>
          <a href="#" class="ayuda">Help</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      history: [
        { name: "Caffenio", date: "Nov 9", logo: "caffenioLogo.png" },
        { name: "Circle K", date: "Oct 31", logo: "circleK.jpg" },
        { name: "Carl's Jr", date: "Sep 21", logo: "carlsjr.jpg" },
      ],
    };
  },
};
</script>

<style lang="less">
.orders {
  padding: 10px 20px;
  .details {
    display: flex;
    align-items: center;
  }
  .order {
    margin-top: 20px;
    padding: 10px;
    -webkit-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.75);
    border-radius: 20px 20px 20px 20px;
    -moz-border-radius: 20px 20px 20px 20px;
    -webkit-border-radius: 20px 20px 20px 20px;
    border: 0px solid #000000;
    .buttons {
      border-top: 1px solid #000;
      text-align: center;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 20px;
      .ayuda {
        color: red;
      }
      .detalles {
        border-right: 1px solid #000;
      }
      a {
        text-decoration: none;
        font-weight: 700;
      }
    }
  }
}
.img img {
  max-width: 80px;
  border-radius: 50%;
  margin-right: 20px;
}
</style>
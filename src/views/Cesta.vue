<template>
  <div class="main">
    <h2>Your cart</h2>
    <div class="cart">
      <div class="store">
        <img src="@/assets/mc.jpg" alt="" />
        <div class="info">
          <p class="restaurant">McDonald's</p>
          <p class="back">Back to the store</p>
        </div>
      </div>
      <div class="items" v-for="(item, index) in cart" :key="index">
        <div class="item">
          <div class="item-info">
            <img :src="'/assets/' + item.img" />
            <div class="details">
              <p class="name">{{ item.name }}</p>
              <p class="price">${{ item.price }}</p>
            </div>
          </div>
          <div class="actions">
            <i class="far fa-trash-alt"></i>
            <p class="quantity">{{ item.quantity }}</p>
            <i class="fas fa-plus"></i>
          </div>
        </div>
      </div>
    </div>
    <button class="empty">Empty basket</button>
    <button class="pay">Go to pay</button>
  </div>
</template>
<script>
export default {
  name: "Cesta",
  data() {
    return {
      cart: [
        {
          name: "Big Mac",
          price: "5.65",
          img: "burguer.jpg",
          quantity: 2,
        },
        {
          name: "Happy Meal",
          price: "2.79",
          img: "mc2.jpg",
          quantity: 1,
        },
        {
          name: "Milkshake",
          price: "1.50",
          img: "shake.jpg",
          quantity: 1,
        },
      ],
    };
  },
};
</script>


<style lang="less">
.main {
  padding: 20px;
}
h2 {
  text-align: center;
}
.cart {
  margin: 20px 0;
  .store {
    img {
      height: 40px;
      width: 40px;
      border-radius: 50%;
      margin-right: 15px;
    }
    display: flex;
    align-items: center;
    .restaurant {
      font-weight: bold;
    }
    .back {
      color: rgba(74, 174, 84);
      font-weight: 600;
    }
  }
  .items {
    margin: 20px 0;
    padding: 0 15px;
  }
  .item {
    border-top: 1px solid #000;
    border-bottom: 1px solid #000;
    padding: 10px;
  }
  .item-info {
    display: flex;
    align-items: center;
    img {
      height: 50px;
      width: 50px;
      border-radius: 50%;
      margin-right: 10px;
    }
    .details {
      font-size: 14px;
    }
  }
  .actions {
    display: flex;
    justify-content: right;

    i,
    p {
      font-weight: 600;
      margin-right: 10px;
    }
  }
}
button {
  display: block;
  margin: 0 auto;
  padding: 15px;
  width: 80%;
  background-color: #dc3545;
  border: none;
  color: white;
  margin-bottom: 20px;
}
.pay {
  background-color: rgba(74, 174, 84);
  font-weight: bold;
  width: 90%;
  border-radius: 15px 15px 15px 15px;
  -moz-border-radius: 15px 15px 15px 15px;
  -webkit-border-radius: 15px 15px 15px 15px;
  border: 0px solid #000000;
}
</style>
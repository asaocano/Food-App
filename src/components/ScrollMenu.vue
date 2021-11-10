<template>
  <div>
    <div class="scroll">
      <div class="scroll-content">
        <div class="avatar" v-for="(item, index) in options" :key="index">
          <i :class="item.icon"></i>
          <a href="#">{{ item.name }}</a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ScrollMenu",
  data() {
    return {
      options: [
        { name: "Pizza", icon: "bx bxs-pizza" },
        { name: "Burger", icon: "fas fa-hamburger" },
        { name: "Hot-Dog", icon: "fas fa-hotdog" },
        { name: "Dessert", icon: "fas fa-ice-cream" },
        { name: "Sushi", icon: "fas fa-fish" },
        { name: "Breakfast", icon: "fas fa-egg" },
        { name: "Vegan", icon: "fas fa-apple-alt" },
        { name: "Coffee", icon: "fas fa-coffee" },
        { name: "Alcohol", icon: "fas fa-cocktail" },
        { name: "Fried", icon: "fas fa-drumstick-bite" },
      ],
    };
  },
};
</script>
<style lang="less">
.scroll {
  margin: 20px 0;
  .scroll-content {
    display: flex;
    overflow-y: auto;
    .avatar {
      padding: 10px;
      border-radius: 10px;
      margin-right: 15px;
      text-align: center;
      i {
        font-size: 25px;
        color: rgba(255, 131, 62);
      }
      a {
        text-decoration: none;
        color: #000;
      }
    }
  }
}
</style>
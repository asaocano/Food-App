<template>
  <div class="Banner">
    <div class="combo">
      <div class="text">
        <h3>Free combo</h3>
        <p>Burger + Coke for new users</p>
      </div>
      <div class="img"><img src="@/assets/burguer.jpg" alt="" /></div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Banner",
};
</script>

<style lang="less">
.combo {
  background-color: rgba(74, 174, 84);
  color: white;
  padding: 20px;
  border-radius: 25px;
  margin: 30px 0;
  display: flex;
  align-items: center;
  .text {
    width: 50%;
    margin-right: 10px;
    h3 {
      font-weight: 400;
    }
    p {
      font-weight: 300;
    }
  }
  .img {
    img {
      width: 100%;
      border-radius: 10px;
    }
    width: 50%;
    object-fit: cover;
  }
}
</style>
